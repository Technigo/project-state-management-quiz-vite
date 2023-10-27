// Defining a functional component named Title that accepts 'children' as a prop
const Title = ({ children }) => {
    return (
        <h2 className="font-semibold mb-4 text-lg text-gray-900">
            {children}
        </h2>
    );
}

export default Title;
