export type CustomButtonProps = {
    text: string;
    customStyles?: string;
    icon?: string | React.ReactNode;
};

const CustomButton = ({ text, customStyles, icon }: CustomButtonProps) => {
    return (
        <button className={`flex gap-2 justify-center items-center px-6 py-2 hover:text-[#4e4feb] ${customStyles} transition duration-300`}>
            {icon}
            {text}
        </button>
    )
}

export default CustomButton