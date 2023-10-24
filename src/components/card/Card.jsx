// Importing CSS module for styling
import styles from "./Card.module.css"; // CSS module for styling

// Creating the Card component
const Card = ({ children }) => {
    return (
        <div className={styles.card}>
            {children} {/* Rendering the content passed as children */}
        </div>
    );
}

export default Card; // Exporting the Card component
