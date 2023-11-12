import "./Intro.css";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <Link to={"/portfolio/intro"}>
            <div className="article_border">
                <div style={{ margin: "2%"}}>
                    <img className="profile" src={require("./profile.jpg")} />
                    <a className="title">김여원, 현대 사회의 희망을 이끄는<br />젊은 리더로 주목</a>
                    <div className="article_font">
                        <br />2020학년도 김여원이라는 학생이 가천대학교 컴퓨터공학과에 입학했다.<br />
                        입학과 동시에 그녀는 가천대학교에 신드롬을 일으킨다.<br />
                        그녀는 어떻게 가천대를 바꿨나...</div>
                </div>
            </div >
        </Link>
    );
}
export default Intro;