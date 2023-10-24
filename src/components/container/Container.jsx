// Importing CSS module for styling
import styles from "./Container.module.css"; // CSS module for styling

// Creating the Container component
const Container = ({ children }) => {
    return (
        <div className={styles.container}>
            {children} {/* Rendering the content passed as children */}
        </div>
    );
}

export default Container; // Exporting the Container component
