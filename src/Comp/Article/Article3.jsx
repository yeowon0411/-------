import "./Article3.css";
import { Link } from "react-router-dom";

function Article3() {
  return (
    <div className="article_border_act3">
      <div style={{margin: "2%"}}>
        <img className="profile_act3" src={require("./starbucks.png")} />
        <a className="title">가천대학교에<br/>스타벅스가 생기다</a>
        <div className="article_font_act3">
          <br />가천대에 스타벅스가 신규로 입점했다. 대학 캠퍼스 내에 위치한 이번 매장은 학생들과 교직원들에게 편리한 위치에 자리하고 있다. 스타벅스의 독특한 분위기와 다양한 음료 메뉴는 가천대 내에서 즐겁고 편안한 시간을 보낼 수 있는 새로운 공간을 제공하고 있다. 이로써 학문과 커피의 만남이 이루어지며, 학내 생활이 더욱 다양해질 전망이다. 스타벅스의 도입으로 가천대 내 커뮤니티가 활성화되고 학내 생활의 품격이 한층 높아지게 될 것으로 기대된다.
        </div>
      </div>
    </div>
  );
}
export default Article3;
