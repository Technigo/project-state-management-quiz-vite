export const Options = ({ options, onOptionSelect }) => {
    return (
        <div>
            {options.map((option, index) => (
                <button key={index} onClick={() => onOptionSelect(index)}>
                    {option}
                </button>
            ))}
        </div>
    );
};