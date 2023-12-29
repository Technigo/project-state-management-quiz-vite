import style from "./SWText.module.css";

export const SWText = ({
  header,
  regularText,
  headerClassName,
  textClassName,
}) => {
  return (
    <>
      {header && (
        <h1 className={`${style.header} ${headerClassName || ""}`}>{header}</h1>
      )}
      <p className={`${style.regularText} ${textClassName || ""}`}>
        {regularText}
      </p>
    </>
  );
};

// Thought I was going to use this page much more but in the end I haven't, might come in handy when I make the page prettier with more special effects and fonts etc to make it even more SW-like!
