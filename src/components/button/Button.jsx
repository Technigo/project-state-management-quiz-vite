import styles from "./Button.module.css";

const Button = ({ children, onClick, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
        >
            {children}
        </button>
    );
}

export default Button;
