import "./Study.css";
import { useState } from "react";
import StudyCard from "./StudyCard";

function StudyMain() {
    const [index, setIndex] = useState(0);
    const contentChange = (event) => {
        setIndex(event.target.value);
    };
    return (
        <div className="card_border">
            <StudyCard />
        </div>
    );
}
export default StudyMain;