import "./Study.css";
import { Link } from "react-router-dom";

function Study() {
  return (
      <div className="article_border_study">
        <img className="profile_study" src={require("./book.png")} />
        <Link className="title" to={"/portfolio/study"}>밑거름이 되었던 공부</Link>
        <div className="article_font">
          <br />과연 김여원은 어떤 공부를 통해 성장했는가?
          <br />그녀의 공부 노트를 훔쳐보았다.
        </div>
      </div>
  );
}
export default Study;
