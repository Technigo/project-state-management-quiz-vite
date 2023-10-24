// Importing CSS module for styling
import styles from "./Button.module.css"; // CSS module for styling

// Creating the Button component
const Button = ({ children, onClick, disabled = false }) => {
    return (
        <button
            onClick={onClick} // Assigning the provided click event handler to the button's onClick event
            disabled={disabled} // Assigning the provided disabled status to the button
            className={styles.button} // Applying styles defined in the CSS module
        >
            {children} {/* Rendering the content passed as children */}
        </button>
    );
}

export default Button; // Exporting the Button component
