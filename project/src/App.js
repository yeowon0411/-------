import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Intro from "./Comp/Intro/Intro";
import Project from "./Comp/Project/Project";
import Header from "./Comp/Header/Header";
import Article from "./Comp/Article/Article";
import "./App.css";
import Career from "./Comp/Career/Career";
function App() {
  return (
    <Router >
      <div className="background">
        <div className="news">
          <Header />
          <div className="a">
            <Intro />
            <Article />
          </div>
          <hr />
          <div className="b">
            <div className="sub_article_2">
              <div className="profile_2"><img src={require("./Comp/탕.JPG")} width="100px" height="120px" /></div>
              <br />
              <a className="title_2" >탕후루 많이 먹기 대회 우승<br /></a>
              <a>통귤 탕후루로 승부를 두다.<br />
                한번에 5개까지도 먹어...</a>
            </div>
            <Project />
          </div>
          <hr />
          <Career />
        </div>
      </div>
      <footer className="footer">
        Copyright 2023. Kim YeoWon all rights reserved.
        <br />
        연락처 : 010-6577-4824
      </footer>
    </Router>
  );
}
export default App;

