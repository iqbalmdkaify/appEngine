import { AiFillCiCircle } from "react-icons/ai"
import Card from "../atoms/Card"
import MiniContactForm from "../atoms/MiniContactForm"

const Footer = () => {
    return (
        <footer className='text-[#141E46] mt-4 w-full'>
            <div className='flex items-start justify-between mx-[6rem] px-6 py-6 border-[#ff7676] border-t-[1px]'>
                <div className='flex flex-col items-center gap-6'>
                    <AiFillCiCircle size={180} />
                    <div className='text-center'>
                        <p>The most shitty company that excels in <span className='font-bold'>CRM technology</span> using django as their backend.</p>
                        <p className='uppercase'>The uglier the better</p>
                    </div>
                </div>
                <Card
                    title="Quick links"
                    children={
                        <div className='flex flex-col justify-around items-start text-xl'>
                            <a>Home</a>
                            <a>Interact</a>
                            <a>SignIn</a>
                            <a>Complain</a>
                        </div>
                    }
                />
                {/* mini contact form */}
                <Card
                    title="Button?"
                    children={
                        <MiniContactForm />
                    }
                />
            </div>
            {/* copyright */}
            <div className='bg-[#ff7676]'>
                <p className='text-md font-semibold text-center'>CI CRM company copyrights &#169; 2023</p>
            </div>
        </footer>
    )
}

export default Footer