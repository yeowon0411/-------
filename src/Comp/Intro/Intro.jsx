import "./Intro.css";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="article_border">
            <img className="profile" src={require("./profile.jpg")} />
            <Link className="title" to={"/portfolio/intro"}><a>김여원, 현대 사회의 희망을 이끄는 젊은 리더로 주목</a></Link>
            <div className="article_font">
                <br />2020학년도 김여원이라는 학생이 가천대학교 컴퓨터공학과에 입학했다.<br />
                입학과 동시에 그녀는 가천대학교에 신드롬을 일으킨다.<br />
                그녀는 어떻게 가천대를 바꿨나...</div>
        </div>
    );
}
export default Intro;