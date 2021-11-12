import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './'

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-[#141720] text-white border-none text-sm"
    />
);

const Welcome = () => {

    const connectWallet = () => {

    } 

    const handleSwap = () => {

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
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    0xjddndj...hdjd
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    MEOWs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="ETH: 0.0" name="ethAmount" type="number" handleChange={()=>{}}/>
                        <Input placeholder="MEOWs 0.0" name="meowsAmount" type="number" handleChange={()=>{}}/>

                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {false ? (
                            <Loader />
                        ) : (
                            <button
                            type="button"
                            onClick={handleSwap}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
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