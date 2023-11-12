import "./Intro.css";
import { useState } from "react";

import intros from "./data";

function IntroMain() {
    const [index, setIndex] = useState(0);
    const contentChange = (event) => {
        setIndex(event.target.value);
    };
    return (
        <div>
            <div style={{ textAlign: 'center'}}>
            {intros.map((intro, index) => (
                <button className="transparent-button" onClick={contentChange} value={index}>
                    {intro.tab}
                </button>
            ))}
            </div>
            <br /> <br />
            {intros[index].content}
        </div>

    );
}
export default IntroMain;