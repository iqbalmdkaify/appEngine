import { AiFillCiCircle, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        // main html body has already got 1rem xy padding
        <nav className='w-full sticky top-0 px-4 flex flex-col justify-between z-10 mb-6 text-[#C70039]'>
            <div className='border-b-[1px] border-[#C70039] py-4'>
                {/* Nav wrapper */}
                <div className='flex justify-between items-center'>
                    {/* logo container */}
                    <div className='flex space-x-2 items-center'>
                        <AiFillCiCircle size={50} /><span className='font-semibold text-4xl'>TECH<span className='text-3xl text-[#141E46]'>NOLOGY</span></span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden sm:flex space-x-10 mr-10 text-[#141E46]'>
                        <a href='#'>Home</a>
                        <a href='#'>Interact</a>
                        <a href='#'>Contact</a>
                    </div>

                    {/* Hamburger Menu */}
                    <AiOutlineMenu className='sm:hidden' size={30} onClick={() => setVisible(!visible)} />
                </div>

                {/* Mobile Navigation */}
                {visible && <div className='sm:hidden mt-4 flex flex-col gap-2 text-center uppercase font-bold text-lg'>
                    <a href='#'>Home</a>
                    <a href='#'>Interact</a>
                    <a href='#'>Contact</a>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar