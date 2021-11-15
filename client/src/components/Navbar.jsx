import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext, useState } from 'react';


import logo from '../../images/logo.png';
import { MeowsTokenContext } from '../context/MeowsTokenContext';

{/* 
  Function component to handle the menu item used in Navbar menu.
*/}  
const NavBarItem = ({ title, classprops }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    )
};
  
{/* 
  Navbar component deal with logo and menu, have 2 layout suit for mobile and desktop devices.
*/}
const Navbar = () => {
    {/* Moblie version Menu State (open or close). */}
    const [toggleMenu, setToggleMenu] = useState(false);
    {/* State is Navbar component first time loaded. */}
    const [init, setInit] = useState(false);

    const { connectWallet, disconnectWallet, connectedAccount } = useContext(MeowsTokenContext);

    return (
        <nav>
            <div className="w-full flex md:justify-center justify-between items-center p-4">
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                </div>
                <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    {["Ecosystem", "Buy", "NFT/Art", "Community"].map((item, index) => (
                        <NavBarItem key={item + index} title={item} />
                    ))}
                    {!connectedAccount 
                        ? <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            onClick={connectWallet}>
                            Connect wallet
                        </li>
                        : <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            onClick={disconnectWallet}>
                            <span>{connectedAccount.substring(0,6) + "..." + connectedAccount.substring(connectedAccount.length - 4)}</span>
                        </li>
                    }
                </ul>
                <div className="flex relative">
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => {setToggleMenu(false);}} />
                        : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => {setToggleMenu(true); !init && setInit(true);}} />}
                </div>
            </div>
            <div>
                {init && (
                    <ul id="menuMobile" className={`z-10 p-3 fixed w-full md:hidden h-screen list-none
                        flex flex-col justify-start items-end text-white white-glassmorphism ${toggleMenu ? "animate-slide-in" : "animate-slide-out"}`}>
                        {["Ecosystem", "Buy", "NFT/Art", "Community"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classprops="my-2 text-2xl font-bold" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;