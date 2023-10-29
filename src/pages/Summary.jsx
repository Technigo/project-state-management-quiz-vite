//Summary page which is shown after last answer


import { SummaryResponse } from "../components/SummaryResponse";
import { RestartButton } from "../components/Buttons/RestartButton";

export const Summary = () => {
    //Mounting the components SummaryResponse and RestartButton to be shown after the 'Questions' page.
    return (
        <div className="summary-page">
            <SummaryResponse />
            <RestartButton />
        </div>
    );
};
