import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/contants';

export const MeowsTokenContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const meowstokenContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        meowstokenContract
    });
}

export const MeowsTokenProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState('');

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

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <MeowsTokenContext.Provider value={{ connectWallet, disconnectWallet, connectedAccount }}>
            {children}
        </MeowsTokenContext.Provider>
    )
}