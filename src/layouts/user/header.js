import React, { useState } from "react";
import logo from "../../public/assets/img/footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        // Add your sidebar toggle logic here
    };
    return (
        <div className="xl:w-[1200px] w-11/12 mx-auto h-[94px] text-white bg-transparent flex items-end">
            <div className="flex justify-between w-full">
                <img className="w-[74px] ml-10 mr-20" src={logo} />
                <ul className={`justify-between items-center lg:gap-14 md:gap-8 gap-4 md:flex hidden`}>
                    <li className="text-sm leading-[30px]"><a href="#" className="hover:underline hover:text-[#ffdd59]">Services</a></li>
                    <li className="text-sm leading-[30px]"><a href="#" className="hover:underline hover:text-[#ffdd59]">Products</a></li>
                    <li className="text-sm leading-[30px]"><a href="#" className="hover:underline hover:text-[#ffdd59]">Cases</a></li>
                    <li className="text-sm leading-[30px]"><a href="#" className="hover:underline hover:text-[#ffdd59]">Partners</a></li>
                    <li className="text-sm leading-[30px]"><a href="#" className="hover:underline hover:text-[#ffdd59]">Contacts</a></li>
                </ul>

                <div className="items-center gap-5 md:flex hidden">
                    <p href="#" className="text-base leading-[22px]">Contacts</p>
                    <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 border-primary w-[30px] h-[30px] rounded-full hover:bg-white bg-transparent text-primary hover:text-black"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="md:hidden block">
                    <div className="">
                        {isOpen ? (
                            <AiOutlineClose size={30} color="#fff" onClick={toggleNavbar} />
                        ) : (
                            <AiOutlineMenu size={30} color="#fff" onClick={toggleNavbar} />
                        )}
                    </div>
                </div>

            </div>
            <nav className={`md:hidden lg:hidden fixed top-0 left-0 h-full bg-slate-900 text-white w-64 z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
                <div className="p-4 ">
                <img className="w-[74px] ml-10 mr-20 pb-5 pt-2" src={logo} />
                    <ul className={`justify-between text-white `}>
                        <li className="text-sm leading-[30px] pb-4"><a href="#" className="hover:underline hover:text-[#ffdd59]">Services</a></li>
                        <li className="text-sm leading-[30px] pb-4"><a href="#" className="hover:underline hover:text-[#ffdd59]">Products</a></li>
                        <li className="text-sm leading-[30px] pb-4"><a href="#" className="hover:underline hover:text-[#ffdd59]">Cases</a></li>
                        <li className="text-sm leading-[30px] pb-4  "><a href="#" className="hover:underline hover:text-[#ffdd59]">Partners</a></li>
                        <li className="text-sm leading-[30px] pb-4"><a href="#" className="hover:underline hover:text-[#ffdd59]">Contacts</a></li>
                    </ul>
                    <div className="items-center gap-5 flex md:hidden">
                        <p href="#" className="text-base leading-[22px]">Contacts Us</p>
                        <button className="flex justify-center items-center transition ease-in-out duration-300 border-2 border-primary w-[30px] h-[30px] rounded-full hover:bg-primary bg-transparent text-primary hover:text-black"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;