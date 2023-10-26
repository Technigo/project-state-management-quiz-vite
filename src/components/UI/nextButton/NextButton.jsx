import React from "react";
import { Link } from "react-router-dom"

/*Component for next page. Do we need to link it diffferent on every page? Not sure how to do this.. Is it possible to make an if/else statement, like: if on q1 go to q2, else on q2 go to q3 and so on*/

function NextPage() {
    return (
        <div>
            <Link to="/next">
                <button>Next question</button></Link>
        </div>
    );
}

export default NextPage;
