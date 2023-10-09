export type ErrorLineProps = {
    errorMessage: string | undefined;
    errorIcon?: string;
};

const ErrorLine = ({ errorMessage, errorIcon }: ErrorLineProps) => {
    return (
        <div className='flex items-center justify-between mt-[-5px]'>
            {errorIcon && <div>
                {errorIcon}
            </div>}
            <p className='text-red-400 text-[14px]'>{errorMessage}</p>
        </div>
    )
}

export default ErrorLine