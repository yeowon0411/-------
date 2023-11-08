import "./Project.css";
import { BrowserRouter, Route } from "react-router-dom";
import Project1 from "./Project1";
import { Link } from "react-router-dom";

function Project() {
  return (
      <div className="article_border_project">
        <img className="profile_3" src={require("./리액트.JPG")} />
        <Link className="title" to={"/Project1"}>세상을 변화시킨 프로젝트</Link>
        <div className="article_font">
          <br />5살부터 코딩을 시작한 여성은 혁신적인 리액트 프로젝트를 개발하여 기술 세계를 놀라게 했습니다.<br />
          그녀의 끈기와 열정은 새로운 기술을 선도하는데 기여하며 다양성을 장려했습니다.<br />
          그녀는 어린이와 여성들에게 영감을 주고 있습니다.
        </div>
      </div>
  );
}
export default Project;
