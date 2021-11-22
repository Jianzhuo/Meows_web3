import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/contants';

export const MeowsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const meowsContract = new ethers.Contract(contractAddress, contractABI, signer);
}

export const MeowsProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [dexData, setDexData] = useState({ ethAmount:'', meowsAmount:''})
    //false: buy() eth->meows, true: sell() meows->eth
    const [dexState, setDexState] = useState(false);

    const handleChange = (e, name) => {
        if(name=="ethAmount"){
            setDexData({ ethAmount: e.target.value, meowsAmount: e.target.value * 100000});
            dexData.ethAmount = e.target.value;
            dexData.meowsAmount = e.target.value * 100000;
        }else{
            setDexData({ meowsAmount: e.target.value, ethAmount: e.target.value / 100000});
            dexData.meowsAmount = e.target.value;
            dexData.ethAmount = e.target.value / 100000;
        }
        console.log(dexData);
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install Metamask.");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if(accounts.length) {
                setConnectedAccount(accounts[0]);
            }else{
                console.log('No accounts found.');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const connectWallet = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");
            const accounts = await ethereum.request({ method: 'wallet_requestPermissions',
                params: [{
                    eth_accounts: {}
                }]  
            }).then(() => window.ethereum.request({ method: 'eth_requestAccounts' }));

            setConnectedAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const disconnectWallet = async () => {
        setConnectedAccount("");
    }

    const sendExchange = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");

            //get the data from the form...
            console.log(dexData);
        }catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <MeowsContext.Provider value={{ connectWallet, disconnectWallet, connectedAccount, dexState, setDexState, dexData, setDexData, handleChange, sendExchange }}>
            {children}
        </MeowsContext.Provider>
    )
}