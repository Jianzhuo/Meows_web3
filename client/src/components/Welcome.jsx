import React, { useContext, useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle, BsFillArrowDownSquareFill, BsArrowRight } from 'react-icons/bs';
import { IoLogoOctocat } from 'react-icons/io';
import { RiFileCopyLine } from 'react-icons/ri';

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
    const { connectedAccount, dexState, setDexState, dexData, setDexData, handleChange, sendExchangeTransaction, isLoading, allowance, approveMeows, balance } = useContext(MeowsContext);

    const handleSwap = (e) => {
        const { meowsAmount, ethAmount } = dexData;

        e.preventDefault();

        if(!meowsAmount || !ethAmount) return;

        if(parseInt(allowance, 16) < parseInt(dexData.meowsAmount) && dexState){
            approveMeows();
        }else{
            sendExchangeTransaction();
        }

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

                    {/* TODO:
                            Add Contract Address and a button navigate user to EtherScan to lookup the contract.
                            Add Token Address and a button to add the token to user's Metemask Wallet.
                    */}

                    {/* <div className="flex flex-col blue-glassmorphism p-5 mt-5">
                        <div className="text-white text-lg flex flex-row py-2">
                            <div className="max-w-[240px] truncate"> <strong>Contract Address:</strong> <br /> 0x25b7d1a8efcA7e868E3Ac3B0aa27f20d676f696a</div>
                            <button className="flex flex-row white-glassmorphism p-2 px-3 text-white rounded-full ml-3 justify-center items-center text-sm font-bold"
                                onClick={() => {navigator.clipboard.writeText("0x853526C28f4685b58aF5f5C193E42fABA236184C")}}>
                                <RiFileCopyLine fontSize={15} color="#fff" className="mr-1"/>
                                LOOKUP
                            </button>
                        </div>
                        <div className="flex flex-row text-white text-lg py-2">
                            <div className="max-w-[240px] truncate"> <strong>Token Address:</strong> <br /> 0x1f9ff15c137dd54e077f2bfd8542d4f9b4ba4374</div>
                            <button className="flex flex-row white-glassmorphism p-2 px-3 text-white rounded-full ml-3 justify-center items-center text-sm font-bold"
                                onClick={() => {navigator.clipboard.writeText("0x853526C28f4685b58aF5f5C193E42fABA236184C")}}>
                                <RiFileCopyLine fontSize={15} color="#fff" className="mr-1"/>
                                ADD
                            </button>
                        </div>
                    </div>  */}
                    

                    <div className="flex flex-col my-5">
                        <span className="w-[200px] flex justify-between items-center text-white text-base font-semibold my-2 py-3 px-10 rounded-full cursor-pointer hover:bg-[#1e2339] white-glassmorphism">
                            Discover KittyVerse <BsArrowRight fontSize={25} color="#fff"/>
                        </span>
                        <span className="flex justify-between items-center text-white text-base font-semibold m-2 py-3 px-10 rounded-full cursor-pointer hover:bg-[#1e2339] white-glassmorphism">
                            Read MeowPaper <BsArrowRight fontSize={25} color="#fff"/>
                        </span>
                    </div>

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
                            <div className="flex justify-between items-end"> 
                                <div>
                                    <p className="text-white font-light text-sm">
                                        {connectedAccount && <span>{connectedAccount.substring(0,6) + "..." + connectedAccount.substring(connectedAccount.length - 4)}</span>}
                                    </p>
                                    <p className="text-white font-semibold text-lg mt-1">
                                        MEOWs
                                    </p>
                                </div>
                                {balance&&
                                    <span className="text-white text-xl mt-1">M${parseInt(balance, 16)}</span>
                                }
                                
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
                        <BsFillArrowDownSquareFill fontSize={40} color="#fff" className="white-glassmorphism border-2 absolute top-[33%] cursor-pointer" onClick={() => {setDexState(!dexState);}}/>
                        <div className="flex flex-row rounded-lg w-full bg-[#141720] p-3 my-1">
                            <img src={dexState?eth_coin:meows_coin} alt="logo" className="w-12 h-12 white-glassmorphism" />
                            <span className="flex flex-col w-full p-1">
                                <span className="text-white text-[11px] font-bold">Swap To:</span>
                                <span className="text-white font-black text-lg">{dexState?"ETH":"MEOWs"}</span>
                            </span>
                            <Input placeholder="0.0" value={dexState?dexData.ethAmount:dexData.meowsAmount} name={dexState?"ethAmount":"meowsAmount"} type="number" handleChange={handleChange}/>
                        </div>

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                            type="button"
                            onClick={handleSwap}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-lg cursor-pointer white-glassmorphism hover:bg-[#1e2339]"
                            >
                                {parseInt(allowance, 16) < parseInt(dexData.meowsAmount) && dexState  
                                 ? "Allow Meows" : "Swap Now"
                                }
                            </button>
                        )}
                    </div>
                </div>
           </div>
        </div>  
    );
}

export default Welcome;