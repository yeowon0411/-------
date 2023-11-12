import "./Study.css";
import { Link } from "react-router-dom";

function Study() {
  return (
    <Link to={"/portfolio/study"}>
    <div className="article_border_study">
      <div style={{margin: "2%"}}>
        <img className="profile_study" src={require("./book.png")} />
        <a className="title">밑거름이 되었던 공부</a>
        <div className="article_font_study">
          <br />현대 기술 분야에서 주목받는 김여원은 머신러닝, 스프링, 리액트에 대한 탁월한 지식과 기술력으로 인정받고 있습니다.
          그녀의 공부 노트는 전문적이고 체계적으로 정리되어 있어 많은 이들이 그녀의 경험과 지식을 배우고 싶어합니다.
          김여원의 머신러닝, 스프링, 리액트에 대한 풍부한 경험과 노하우를 공부하고 싶어하는 이들에게는 그 노트를 열람하는 것이 귀중한 학습 기회로 될 것입니다.
          그녀의 전문성은 기술 커뮤니티에서 큰 주목을 받으며, 많은 이들에게 영감을 주고 있습니다.
        </div>
      </div>
    </div>
    </Link>
  );
}
export default Study;
