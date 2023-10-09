import { DiDjango } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiReactrouter } from 'react-icons/si';
import { PiWebhooksLogo } from 'react-icons/pi';
import RegisterForm from '../atoms/RegisterForm';
// import LoginForm from '../atoms/LoginForm';

const AuthCard = () => {
    return (
        <div className='flex justify-between items-center gap-[4rem] max-w-6xl'>
            {/* content */}
            <div className='flex flex-col gap-6'>
                <h1 className='font-semibold text-5xl'>Free <span className='text-4xl font-normal'>CRM tool.</span></h1>
                <div>
                    <h1 className='text-4xl mb-[4rem]'>
                        Explore the
                        <br></br>
                        <span className='font-semibold'>power of React hooks and contexts </span>
                        with this website
                    </h1>
                    <div className='mt-4 mb-10 text-center flex flex-col gap-6'>
                        <h1 className='text-4xl font-medium'>Powered by</h1>
                        {/* logos of partners, lmao */}
                        <div className='flex justify-around items-center'>
                            <DiDjango size={60} color="green" />
                            <FaReact size={60} color="#61DBFB" />
                            <SiReactrouter size={60} color="red" />
                            <PiWebhooksLogo size={60} color="grey" />
                        </div>
                    </div>
                    <a href="#" className='underline hover:text-red-400'>No thanks, I'm good</a>
                    <p>This link takes you to nowhere, you don't have any options</p>
                </div>
            </div>

            {/* main login form */}
            {/* <LoginForm /> */}
            <RegisterForm />
        </div>
    )
}

export default AuthCard