import { FaCoins } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { MdHowToVote } from 'react-icons/md';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-strat items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className="flex flex-col mf:flex-row w-full justify-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        We are continuing to 
                        <br />
                        discover the KittyVerse
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard 
                    color="bg-[#2952e3]"
                    title="Staking & LP"
                    icon={<FaCoins fontSize={21} className="text-white" />}
                    subtitle="KittyVerse gives users the ability to DIG (provide liquidity), BURY (stake), and SWAP tokens to gain MEOWS Returns through our sophisticated and innovative passive income reward system."
                />
                <ServiceCard 
                    color="bg-[#8945F8]"
                    title="NFT & Art"
                    icon={<MdDraw fontSize={21} className="text-white" />}
                    subtitle="We are proud to support ingenuity in all its forms with the KittyVerse Incubator. Users are able to create and release their own NFT at KittyVerse."
                />
                <ServiceCard 
                    color="bg-[#F84550]"
                    title="DAO"
                    icon={<MdHowToVote fontSize={21} className="text-white" />}
                    subtitle="Enter The Kitty Metaverse to Play, Create, Own, and Govern a KittyVerse made by cat lover. Every MEOWS Holder are able to deside the whole KittyVerse."
                />
            </div>
        </div>
    );
}

export default Services;Services