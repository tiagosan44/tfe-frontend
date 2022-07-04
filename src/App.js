import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerDrone, getAllDrones, getAllParcels } from './hooks/Core';

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signerAddress = provider.getSigner().getAddress();

  const [drones, setDrones] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }

    const getBalance = async() => {
      const balance = await provider.getBalance(signerAddress)
      const balanceFormated = ethers.utils.formatEther(balance)
      console.log(balanceFormated);
    }

    connectWallet().catch(console.error);
    getBalance().catch(console.error);
  });
  
  
  return (
    <>Hello world</>
  );
}

export default App;
