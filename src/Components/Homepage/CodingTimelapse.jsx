import { useState, useEffect } from "react";

function CodingTimelapse() {

    const CODING_DAY = "03-03-2021";
    const CODING_DAY_DATE = new Date(CODING_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    const [secondsElapsed, setSecondsLapsed] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = Math.floor((now.getTime() - CODING_DAY_DATE.getTime()) / 1000);
            setSecondsLapsed(difference);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <div style={{textAlign: "center", fontSize: "20px"}}>
            <h4>
                Fun fact! I've been coding for <span id="time-container">{intlNumberFormatter.format(secondsElapsed)}</span> seconds!
            </h4>
        </div>
     );
}

export default CodingTimelapse;