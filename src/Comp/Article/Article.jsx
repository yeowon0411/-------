import "./Article.css";
import { Link } from "react-router-dom";

function Article() {
    return (
        <div className="sub_article">
            <a className="title_2" >3일간 씻지않은 햄스터 발견<br /></a>
            <a style={{ fontFamily:'Chosunilbo_myungjo'}}>왜 씻지않았냐는 물음에<br />
                "기숙사에 온수가 안 나와..."</a>
            <br />
            <div><img className="profile_2" src={require("./망.jpg")} /></div>
        </div>
    );
}
export default Article;