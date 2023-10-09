
const RegisterForm = () => {
    return (
        <form className='flex flex-col gap-8 w-1/2'>
            <div className='flex flex-col gap-3'>
                {/* later you can integrate username */}
                <label>Username</label>
                <input type="text" placeholder="Your username" className='outline outline-1 focus:border-none px-2 py-2 border-none' />
            </div>
            <div className='flex flex-col gap-3'>
                {/* later you can integrate username */}
                <label>Email</label>
                <input type="email" placeholder="Your email" className='outline outline-1 focus:border-none px-2 py-2 border-none' />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Password</label>
                <input type="password" placeholder="Your hyper secret password please" className='outline outline-1 focus:border-none px-2 py-2 border-none' />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Repeat Password</label>
                <input type="password" placeholder="Repeat hyper secret password . . ." className='outline outline-1 focus:border-none px-2 py-2 border-none' />
            </div>
            <button>REGISTER</button>
            <p>Already have an account? <a className='underline'>SignIn</a> here</p>
        </form>
    )
}

export default RegisterForm