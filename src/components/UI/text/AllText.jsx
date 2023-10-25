import style from './AllTextStyling.module.css';

export const AllText = ({ header, regularText }) => {
    return (
        <>
            <h1 className={style.header}>{header}</h1>
            <p className={style.regularText}>{regularText}</p>
        </>
    );
}

