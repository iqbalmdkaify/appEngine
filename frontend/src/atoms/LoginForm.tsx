import { useForm } from "react-hook-form";
import ErrorLine from "./ErrorLine";
import CustomButton from "./CustomButton";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type LoginFormInputs = {
    email: string;
    password: string;
};

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const handleFormSubmit = (data: LoginFormInputs) => {
        console.log(data)
    };

    return (
        <form
            className='flex flex-col gap-10 w-1/2'
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
        >
            <div className='flex flex-col gap-2'>
                {/* later you can integrate username */}
                <label>Email</label>
                <input
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is mandatory!"
                        },
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid email!",
                        }
                    })}
                    type="email"
                    placeholder="Your email"
                    className='outline outline-1 focus:border-none px-2 py-2 border-none'
                />
                {errors.email && <ErrorLine errorMessage={errors.email.message} />}
            </div>
            <div className='flex flex-col gap-2'>
                <label>Password</label>
                <input
                    {...register("password", {
                        required: "Password is required",
                    })}
                    type="password"
                    placeholder="Your hyper secret password please"
                    className='outline outline-1 focus:border-none px-2 py-2 border-none'
                />
                {errors.password && <ErrorLine errorMessage={errors.password.message} />}
            </div>
            <CustomButton
                text="LOGIN"
                customStyles="outline outline-1 outline-black text-xl hover:bg-black font-bold"
            />
            <p>Don't have an account? <a className='underline'>Register</a> here</p>
        </form>
    )
}

export default LoginForm