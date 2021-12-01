import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { BigNumber } from "@ethersproject/bignumber";

import { contractABI, contractAddress } from '../utils/contants';

export const MeowsContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const meowsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return meowsContract;
}

export const MeowsProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [dexData, setDexData] = useState({ ethAmount:'', meowsAmount:''})
    //false: buy() eth->meows, true: sell() meows->eth
    const [dexState, setDexState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [allowance, setAllowance] = useState('');
    const [balance, setBalance] = useState('');

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
                getMeowsAllowance();
                getMeowsBalance();
            }else{
                console.log('No accounts found.');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const getMeowsAllowance = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");
            const allowanceAmount = await getEthereumContract().getAllowance();
            setAllowance(allowanceAmount._hex);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const getMeowsBalance = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");
            const balance = await getEthereumContract().getOwnerBalance();
            setBalance(balance._hex);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const approveMeows = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");
            const amount = BigNumber.from("100000000");
            const txnHash = await getEthereumContract().approve(amount._hex);
            setIsLoading(true);
            console.log(`Loading - ${txnHash.hash}`);
            await txnHash.wait();
            setIsLoading(false);
            console.log(`Success - ${txnHash.hash}`);
            getMeowsAllowance();
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
            getMeowsAllowance();
            getMeowsBalance();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    const disconnectWallet = async () => {
        setConnectedAccount("");
        setAllowance("");
    }

    const sendExchangeTransaction = async () => {
        try{
            if(!ethereum) return alert("Please install Metamask.");

            //get the data from the form...
            const { meowsAmount, ethAmount } = dexData;
            const meowsContract = getEthereumContract();
            if(dexState){
                console.log("sell");
                const amount = BigNumber.from(meowsAmount);
                const txnHash = await meowsContract.sell(amount._hex);
                setIsLoading(true);
                console.log(`Loading - ${txnHash.hash}`);
                await txnHash.wait();
                setIsLoading(false);
                console.log(`Success - ${txnHash.hash}`);
                setDexData({ ethAmount: "", meowsAmount: ""});
                getMeowsAllowance();
            }else{
                console.log("buy");
                const parsedAmount = ethers.utils.parseEther(ethAmount);
                const txnHash = await meowsContract.buy({value: parsedAmount._hex});
                setIsLoading(true);
                console.log(`Loading - ${txnHash.hash}`);
                await txnHash.wait();
                setIsLoading(false);
                console.log(`Success - ${txnHash.hash}`);
                setDexData({ ethAmount: "", meowsAmount: ""});
            }
            getMeowsBalance();
        }catch (error) {
            console.log(error);
            throw new Error("No ethereun object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <MeowsContext.Provider value={{ connectWallet, disconnectWallet, connectedAccount, dexState, setDexState, dexData, setDexData, handleChange, sendExchangeTransaction, isLoading, allowance, approveMeows, balance }}>
            {children}
        </MeowsContext.Provider>
    )
}