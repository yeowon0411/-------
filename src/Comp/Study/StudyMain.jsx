import "./Study.css";
import { useState } from "react";
import studies from "./data";

function StudyMain() {
    const [index, setIndex] = useState(0);
    const contentChange = (event) => {
        setIndex(event.target.value);
    };
    return (
        <div>
            <div style={{ textAlign: 'center'}}>
            {studies.map((studie, index) => (
                <button className="transparent-button" onClick={contentChange} value={index}>
                    {studie.tab}
                </button>
            ))}
            </div>
            <br /> <br />
            {studies[index].content}
        </div>

    );
}
export default StudyMain;