import { ethers } from 'ethers';
import coreConfiguration from '../config/Core'

const provider = new ethers.providers.Web3Provider(window.ethereum);
const { address, abi } = coreConfiguration;
const coreContract = new ethers.Contract(address, abi, provider.getSigner());

const PESTICIDES = {
	'1': 'A',
	'2': 'B',
    '3': 'C',
    '4': 'D',
    '5': 'E',
}

const STATUS = {
	'0': 'UNASIGNED',
	'1': 'ASIGNED',
    '2': 'DONE',
}

const registerDrone = async (maxHigh, minHigh, flightCost, listPesticides) => {
    const droneId = await coreContract.registerDrone(maxHigh, minHigh, flightCost, listPesticides, {
        gasLimit: 10000000 ,
        nonce: 9 || undefined,
      });
    return droneId;
}

const registerParcel = async (to, maxHigh, minHigh, pesticide) => {
    const parcelId = await coreContract.registerParcel(to, maxHigh, minHigh, pesticide, {
        gasLimit: 10000000 ,
        nonce: 9 || undefined,
      });
    return parcelId;
}

const getAllDrones = async () => {
    const totalDrones = await getTotalDrones();
    let droneIds = new Array(Number(totalDrones)).fill().map((_, index) => index);
    
    const dronePromise = droneIds.map((droneId) =>
        getDrone(droneId)
    );
    const drones = await Promise.all(dronePromise);
    return drones;
}

const getDrone = async (droneId) => {
    const data = await getDroneData(droneId);
    const state = await getDroneState(droneId);
    return { id:droneId, data:Object.fromEntries(data), state:state }
}

const getAllParcels = async () => {
    const totalParcels = await getTotalParcels();
    const parcels = [];
    for(let i = 1; i <= totalParcels; i++) {
        const data = await getParcelData(i);
        const parcel = { id:i, data: data }
        parcels.push(parcel);
    }
    return parcels;
}

const getTotalParcels = async () => {
    const parcels = await coreContract.totalParcels();
    return parcels;
}

const getTotalDrones = async () => {
    const drones = await coreContract.totalDrones();
    return drones;
}

const getParcelData = async (index) => {
    const parcelData = await coreContract.getParcelData(index);
    return parcelData;
}

const getDroneData = async (index) => {
    const droneData = await coreContract.getDroneData(index);
    return droneData;
}

const getDroneState = async (index) => {
    const droneState = await coreContract.getDroneState(index);
    return droneState;
}

const asignDrone = async (droneId, parcelId) => {
    const result = await coreContract.asignDrone(droneId, parcelId);
    return result;
}

const matchDroneParcel = async (droneId, parcelId) => {
    const result = await coreContract.matchDroneParcel(droneId, parcelId);
    return result;
}

const executeJob = async (droneId, parcelId) => {
    const result = await coreContract.executeJob(droneId, parcelId);
    return result;
}

const parcelsByOwner = async (owner) => {
    const result = await coreContract.parcelsByOwner(owner);
    return result;
}

export { registerDrone, registerParcel, getAllDrones, getAllParcels };