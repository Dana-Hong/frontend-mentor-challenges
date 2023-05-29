type ButtonProps = {
    type?: 'primary | secondary';
    children: React.ReactNode;
    className?: string;
}

const Button = ({ type, children, className }: ButtonProps) => {
    return (
        <a 
            className={`
                cursor-pointer
                block
                w-fit
                py-3
                px-6
                font-bold
                bg-eucaplyptus
                border-2
                border-eucaplyptus
                text-dark-purple 
                hover:bg-dark-purple 
                hover:text-white hover:underline hover:decoration-eucaplyptus hover:decoration-[3px]
                ${className}
                `}>
            {children}
        </a>
    )
}

export default Button;