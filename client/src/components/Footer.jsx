import ico_dis from '../../images/ico-dis.svg';
import ico_red from '../../images/ico-red.svg';
import ico_tel from '../../images/ico-tel.svg';
import ico_tw from '../../images/ico-tw.svg';
import ico_ins from '../../images/instagram.svg';

const CommunityCard = ({ src, alt }) => (
    <div className="flex flex-col justify-center items-center p-8" >
        <img src={src} alt={alt} className="h-[56px] cursor-pointer hover:scale-110"/>
        <p className="text-white">{alt}</p>
    </div>
)

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-20">
            <span className="text-white w-[80%] text-center text-[#bbbbbe] text-lg">
                Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, 
                <br />
                accurate MEOWS information.
                <br />
                <br />
                Using the links below, you can join our various groups alongside the other members of the MeowsArmy.
            </span>
            <div className="flex flex-row pt-10 pb-20 flex-wrap justify-center items-center">
                <CommunityCard src={ico_dis} alt="Discord" />
                <CommunityCard src={ico_red} alt="Reddit" />
                <CommunityCard src={ico_tel} alt="Telegram" />
                <CommunityCard src={ico_tw} alt="Twitter" />
                <CommunityCard src={ico_ins} alt="Instagram" />
            </div>
            <div className="flex flex-row text-white text-sm font-semibold pb-5 flex-wrap justify-center items-center">
                <span className="p-4 cursor-pointer hover:underline underline-offset-8">Medium</span>
                <span className="p-4 cursor-pointer hover:underline underline-offset-8">Etherscan</span>
                <span className="p-4 cursor-pointer hover:underline underline-offset-8">CoinMarketCap</span>
                <span className="p-4 cursor-pointer hover:underline underline-offset-8">CoinGecko</span>
            </div>
        </div>
    );
}

export default Footer;