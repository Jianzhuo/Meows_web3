import { RiFileCopyLine } from 'react-icons/ri'

const Community = () => {
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions pt-8">
            <div className="flex flex-col md:p-12 py-12 px-4 justify-center items-center">
                <span className="text-white text-3xl sm:text-5xl py-2">Community</span>
                <span className="text-white py-10 text-[#bbbbbe] text-lg text-center">
                    If you'd like to donate to the <strong className="text-white">Devs</strong>, send <strong className="text-white">ETH</strong> or <strong className="text-white">MEOWS</strong> here. Thank you for your support! Meow!
                </span>
                <div className="blue-glassmorphism p-7 flex sm:flex-row flex-col justify-center items-center">
                    <div className="flex flex-row pb-5 sm:pb-0">
                        <div className="text-white text-lg truncate max-w-[300px]">0x853526C28f4685b58aF5f5C193E42fABA236184C</div>
                        <div className="absolute w-[150px] h-7 address-hider left-[50%] sm:left-[30%]"></div>
                    </div>
                    <button className="flex flex-row white-glassmorphism p-4 px-5 text-white rounded-full ml-3 justify-center items-center text font-bold"
                        onClick={() => {navigator.clipboard.writeText("0x853526C28f4685b58aF5f5C193E42fABA236184C")}}>
                        <RiFileCopyLine fontSize={20} color="#fff" className="mr-1"/>
                        Copy to Clipboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Community;