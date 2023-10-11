import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import CustomButton from "../atoms/CustomButton"

const NavBar = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleNavVisibility = () => {
        setVisible(!visible);
    }

    return (
        <nav className='w-full h-[4rem] text-white bg-black flex justify-between items-center px-6'>
            <h1 className='font-semibold text-xl md:text-3xl'>TEST APP</h1>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center justify-between gap-20'>
                <ul className='flex space-x-10 items-center'>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Contact</li>
                    <CustomButton
                        text="LOGOUT"
                        customStyles="hover:outline hover:outline-[1px] hover:outline-[#4e4feb]"
                    />
                </ul>
                <p>Welcome, User</p>
            </div>
            <div onClick={handleNavVisibility} className='block md:hidden'>
                {visible ? <AiOutlineClose size={20} color="#4e4feb" /> : <AiOutlineMenu size={20} color="#4e4feb" />}
            </div>

            {/* Mobile Navigation */}
            <ul className={visible ? "fixed top-0 left-0 mt-[4rem] text-[#4e4feb] h-[calc(100%-4rem)] flex flex-col bg-[#100F0F] w-full justify-center items-center gap-[4rem] text-xl py-8 ease-in duration-300" : " fixed top-0 left-[-100%] mt-[4rem] h-[calc(100%-4rem)]"}>
                <li>Home</li>
                <li>Explore</li>
                <li>Contact</li>
                <div className='flex flex-col space-y-4 items-center'>
                    <CustomButton
                        text="LOGOUT"
                        customStyles="hover:outline hover:outline-[1px] hover:outline-[#4e4feb] text-white"
                    />
                    <p className='text-white'>Welcome, User</p>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar