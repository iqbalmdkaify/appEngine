import { DiDjango } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiReactrouter } from 'react-icons/si';
import { PiWebhooksLogo } from 'react-icons/pi';
import LoginForm from '../atoms/LoginForm';

const AuthCard = () => {

    return (
        // main wrapper div which will take the full space of body--> w,h-screen
        <div className='w-full h-full md:p-[70px] text-[#141E46]'>
            <div className='grid md:grid-cols-2 items-center justify-center'>
                {/* login div container */}
                <div className='flex justify-center items-center'>
                    {/* login form */}
                    <LoginForm />
                </div>

                {/* content container */}
                <div className='flex flex-col items-center justify-between h-[calc(100vh-140px)] px-6 md:px-0'>
                    <div className='w-full flex flex-col justify-between items-center text-center'>
                        {/* texts */}
                        <div className='flex flex-col items-center justify-between gap-[3rem]'>
                            <h1 className='font-semibold md:text-[4.768rem] text-[3.052rem]'>
                                Test your code and db.
                            </h1>
                            <h4 className='font-normal text-center md:text-[2.441rem] text-[1.953rem]'>
                                Explore the power of React hooks and Contexts with this website along with django.
                            </h4>
                            <h2 className='font-semibold text-[#C70039] text-[2.441rem] md:text-[3.815rem]'>
                                Powered by
                            </h2>
                        </div>

                        {/* logos of partners, lmao */}
                        <div className='flex gap-[60px] mt-[2rem]'>
                            <DiDjango size={70} color="green" />
                            <SiReactrouter size={70} color="red" />
                            <PiWebhooksLogo size={70} />
                            <FaReact size={70} color="#61dbfb" />
                        </div>
                    </div>

                    {/* rem texts */}
                    <div className='text-base text-center'>
                        <p className='text-[#C70039] underline hover:cursor-pointer'>No thanks, I’m good</p>
                        <p className='text-[#141E46]'>This link takes you to nowhere, you don’t have any options</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthCard