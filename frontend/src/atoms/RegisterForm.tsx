import { useForm } from "react-hook-form";
import ErrorLine from "./ErrorLine";

export type RegisterFormInputs = {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
};

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<RegisterFormInputs>();

    const handleFormSubmit = (data: RegisterFormInputs) => {
        console.log(data)
    };

    return (
        <form
            className='flex flex-col gap-8 w-1/2'
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
        >
            <div className='flex flex-col gap-2'>
                {/* later you can integrate username */}
                <label>Username</label>
                <input
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is mandatory!"
                        },
                        maxLength: {
                            value: 10,
                            message: 'Should be 10 characters long!'
                        }
                    })}
                    type="text"
                    placeholder="Your cool username"
                    className='outline outline-1 focus:border-none px-2 py-2 border-none'
                />
                {errors.username && <ErrorLine errorMessage={errors.username.message} />}
            </div>
            <div className='flex flex-col gap-2'>
                {/* later you can integrate username */}
                <label>Email</label>
                <input
                    {...register("email", {
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
            <div className='flex flex-col gap-2'>
                <label>Repeat Password</label>
                <input
                    {...register("repeatPassword", {
                        validate: (value) => value === getValues("password") || "passwords don't match"
                    },
                    )}
                    type="password"
                    placeholder="Your hyper secret password please"
                    className='outline outline-1 focus:border-none px-2 py-2 border-none'
                />
                {errors.repeatPassword && <ErrorLine errorMessage={errors.repeatPassword.message} />}
            </div>
            <button>REGISTER</button>
            <p>Already have an account? <a className='underline'>SignIn</a> here</p>
        </form>
    )
}

export default RegisterForm