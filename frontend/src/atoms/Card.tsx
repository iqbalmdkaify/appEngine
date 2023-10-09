type CardProps = {
    title?: string;
    titleCustomStyles?: string;
    children: React.ReactNode;
};

const Card = ({ title, titleCustomStyles, children }: CardProps) => {
    return (
        <div className='flex flex-col gap-8 max-w-md'>
            <h1 className={`${titleCustomStyles} font-semibold text-[#141E46] text-4xl`}>{title}</h1>
            <div className='text-[#141E46]'>
                {children}
            </div>
        </div>
    )
}

export default Card