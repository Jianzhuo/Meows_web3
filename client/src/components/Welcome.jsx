import React, { useContext, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle, BsFillArrowDownSquareFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { IoLogoOctocat } from 'react-icons/io'

import { MeowsContext } from '../context/MeowsContext';
import { Loader } from './'
import meows_coin from '../../images/meows_coin.png';
import eth_coin from '../../images/eth_coin.png';

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        onInput={(e) => handleChange(e, name)}
        className="w-[120px] rounded-sm bg-[#141720] text-white text-xl border-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none font-black"
    />
);

const Welcome = () => {
    const { connectedAccount, dexState, setDexState, dexData, setDexData, handleChange, sendExchange } = useContext(MeowsContext);
    
    const connectWallet = () => {

    } 

    const handleSwap = (e) => {
        const { meowsAmount, ethAmount } = formData;

        e.preventDefault();

        if(!meowsAmount || !ethAmount) return;

        sendExchange();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        KittyVerse <br /> The future is meow! 
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        A Decentralized Token for every cat lover <br /> to unlocks a universe of infinite experiences.
                    </p>
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        <p className="text-white text-base font-semibold">
                            Mint MEOWs
                        </p>
                    </button>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <IoLogoOctocat fontSize={25} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {connectedAccount && <span>{connectedAccount.substring(0,6) + "..." + connectedAccount.substring(connectedAccount.length - 4)}</span>}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    MEOWs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism relative">
                        <div className="flex flex-row rounded-lg w-full bg-[#141720] p-3 my-1">
                            <img src={dexState?meows_coin:eth_coin} alt="logo" className="w-12 h-12 white-glassmorphism" />
                            <span className="flex flex-col w-full p-1">
                                <span className="text-white text-[11px] font-bold">Swap From:</span>
                                <span className="text-white font-black text-lg">{dexState?"MEOWs":"ETH"}</span>
                            </span>
                            <Input placeholder="0.0" value={dexState?dexData.meowsAmount:dexData.ethAmount} name={dexState?"meowsAmount":"ethAmount"} type="number" handleChange={handleChange}/>
                        </div>
                        <BsFillArrowDownSquareFill fontSize={40} color="#fff" className="white-glassmorphism border-2 absolute top-[33%]" onClick={() => {setDexState(!dexState);}}/>
                        <div className="flex flex-row rounded-lg w-full bg-[#141720] p-3 my-1">
                            <img src={dexState?eth_coin:meows_coin} alt="logo" className="w-12 h-12 white-glassmorphism" />
                            <span className="flex flex-col w-full p-1">
                                <span className="text-white text-[11px] font-bold">Swap To:</span>
                                <span className="text-white font-black text-lg">{dexState?"ETH":"MEOWs"}</span>
                            </span>
                            <Input placeholder="0.0" value={dexState?dexData.ethAmount:dexData.meowsAmount} name={dexState?"ethAmount":"meowsAmount"} type="number" handleChange={handleChange}/>
                        </div>

                        {false ? (
                            <Loader />
                        ) : (
                            <button
                            type="button"
                            onClick={handleSwap}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-lg cursor-pointer"
                            >
                                Swap Now
                            </button>
                        )}
                    </div>
                </div>
           </div>
        </div>  
    );
}

export default Welcome;