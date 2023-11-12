import "./Project.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <Link to={"/portfolio/project"}>
      <div className="article_border_project">
        <div style={{ margin: "2%" }}>
          <img className="profile_project" src={require("./리액트.png")} />
          <a className="title">세상을 변화시킨 프로젝트</a>
          <div className="article_font_project">
            <br />최근 쇼핑몰, 룸메이트 매칭서비스, 그리고 학교 홈페이지의 혁신적인 업그레이드가 세상을 변화시켰습니다. 새로운 쇼핑몰 플랫폼은 사용자 경험을 대폭 향상시켜 소비자들에게 더 편리하고 다양한 옵션을 제공하고 있습니다. 룸메이트 매칭서비스는 효율적이고 안전한 방 찾기를 돕는 동시에 사용자 간의 적합성을 높이는 역할을 하고 있습니다. 더불어, 학교 홈페이지의 업그레이드는 학생들에게 더 효과적인 학사 정보 접근을 제공하며 학교 커뮤니티를 활성화시키고 있습니다. 이러한 혁신들은 각 분야에서 더 나은 서비스를 통해 삶의 질을 향상시키고 있습니다.
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Project;
