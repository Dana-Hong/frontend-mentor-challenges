type ButtonProps = {
    type?: 'primary | secondary';
    children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
    return (
        <a 
            className="
                block
                w-fit
                py-3
                px-6
                font-bold
                bg-eucaplyptus 
                text-dark-purple 
                hover:bg-dark-purple 
                hover:text-white hover:underline">
            {children}
        </a>
    )
}

export default Button;