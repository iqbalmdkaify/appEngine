import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom'

import CustomButton from "../atoms/CustomButton"

const NavBar = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleNavVisibility = () => {
        setVisible(!visible);
    }

    return (
        <>
            <nav className='w-full h-[5rem] text-white bg-black flex justify-between items-center px-6'>
                <h3 className='font-semibold text-[2.441rem] lg:text-[3.052rem]'>Codedb</h3>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center justify-between gap-20'>
                    <ul className='flex space-x-10 items-center'>
                        <NavLink className='text-[1.25rem]' to="/">Home</NavLink>
                        <NavLink className='text-[1.25rem]' to="explore">Explore</NavLink>
                        <NavLink className='text-[1.25rem]' to="contact">Contact</NavLink>
                        <CustomButton
                            text="LOGOUT"
                            customStyles="hover:outline hover:outline-[1px] hover:outline-[#4e4feb]"
                        />
                    </ul>
                    <p className='text-[1.25rem]'>Welcome, iqbalmd81</p>
                </div>
                <div onClick={handleNavVisibility} className='block md:hidden'>
                    {visible ? <AiOutlineClose size={20} color="#4e4feb" /> : <AiOutlineMenu size={20} color="#4e4feb" />}
                </div>

                {/* Mobile Navigation */}
                <ul className={visible ? "fixed top-0 left-0 mt-[5rem] text-[#4e4feb] h-[calc(100%-4rem)] flex flex-col bg-[#100F0F] w-full justify-center items-center gap-[5rem] text-xl py-8 ease-in duration-300" : " fixed top-0 left-[-100%] mt-[4rem] h-[calc(100%-4rem)]"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="explore">Explore</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <div className='flex flex-col space-y-4 items-center'>
                        <CustomButton
                            text="LOGOUT"
                            customStyles="hover:outline hover:outline-[1px] hover:outline-[#4e4feb] text-white font-bold"
                        />
                        <p className='text-white'>Welcome, User</p>
                    </div>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavBar