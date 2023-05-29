type ButtonProps = {
    type?: 'primary | secondary';
    children: React.ReactNode;
    className?: string;
}

const Button = ({ type, children, className }: ButtonProps) => {
    return (
        <a 
            className={`
                block
                w-fit
                py-3
                px-6
                font-bold
                bg-eucaplyptus 
                text-dark-purple 
                hover:bg-dark-purple 
                hover:text-white hover:underline
                ${className}
                `}>
            {children}
        </a>
    )
}

export default Button;