import style from "./SWText.css";

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
