const coreConfiguration = {
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    abi: [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          }
        ],
        "name": "AsignedDrone",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "enum Core.hiringStatus",
            "name": "",
            "type": "uint8"
          }
        ],
        "name": "ExecutedJob",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          }
        ],
        "name": "asignDrone",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "droneContract",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "droneInstance",
        "outputs": [
          {
            "internalType": "contract DroneNFT",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          }
        ],
        "name": "executeJob",
        "outputs": [
          {
            "internalType": "bool",
            "name": "result",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          }
        ],
        "name": "getDroneData",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "maxHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "flightCost",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "listPesticides",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          }
        ],
        "name": "getDroneState",
        "outputs": [
          {
            "internalType": "enum Core.hiringStatus",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          }
        ],
        "name": "getParcelData",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "maxHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pesticide",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          }
        ],
        "name": "getPesticidesDrone",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "pesticides",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "jobList",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          },
          {
            "internalType": "enum Core.hiringStatus",
            "name": "status",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "droneId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "parcelId",
            "type": "uint256"
          }
        ],
        "name": "matchDroneParcel",
        "outputs": [
          {
            "internalType": "bool",
            "name": "result",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "parcelContract",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "parcelInstance",
        "outputs": [
          {
            "internalType": "contract ParcelNFT",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "parcelsByOwner",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "maxHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "flightCost",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "listPesticides",
            "type": "uint256[]"
          }
        ],
        "name": "registerDrone",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "maxHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minHigh",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pesticide",
            "type": "uint256"
          }
        ],
        "name": "registerParcel",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "result",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalDrones",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalParcels",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
}

export default coreConfiguration;