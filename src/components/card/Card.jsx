// Define a functional component named Card that takes a 'children' prop
const Card = ({ children }) => {
    return (
        <div className="p-4 bg-slate-100 rounded-xl">
            {children}
        </div>
    );
}

export default Card;
