const Button = ({ children, className, ...buttonProps }) => {
    return (
        <button
            {...buttonProps}
            className={`hover:cursor-pointer p-4 w-full font-semibold rounded-lg transition-all ease-in-out delay-50 hover:-translate-y-1 disabled:cursor-not-allowed disabled:translate-y-0 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;
