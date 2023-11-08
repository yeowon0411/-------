import "./Project.css";
import { Link } from "react-router-dom";

function Career() {
  return (
      <div className="article_border2">
        <img className="profile_4" src={require("./커리.jpg")} />
        <Link className="title" to={"/Project1"}><br />빛나는 경력과 성취, 업계에서 주목받는 여성</Link>
        <div className="article_font">
          <br />5살부터 코딩을 시작한 여성은 혁신적인 리액트 프로젝트를 개발하여 기술 세계를 놀라게 했습니다.<br />
          그녀의 끈기와 열정은 새로운 기술을 선도하는데 기여하며 다양성을 장려했습니다.<br />
          그녀는 어린이와 여성들에게 영감을 주고 있습니다.
        </div>
      </div>
  );
}
export default Career;