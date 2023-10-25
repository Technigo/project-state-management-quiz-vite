const Button = ({ children, className, ...buttonProps }) => {
    return (
        <button
            {...buttonProps}
            className={` ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;
