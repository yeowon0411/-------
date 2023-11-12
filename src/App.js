import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Comp/Header/Header";
import "./App.css";
import Main from "./Comp/Main";
import IntroMain from "./Comp/Intro/IntroMain";
import ProjectMain from "./Comp/Project/ProjectMain";
import CareerMain from "./Comp/Career/CareerMain";
import StudyMain from "./Comp/Study/StudyMain";

function App() {
  return (
    <div>
      <div className="background">
        <div className="news">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/portfolio" element={<Main />} />
              <Route path="/portfolio/intro" element={<IntroMain />} />
              <Route path="/portfolio/project" element={<ProjectMain />} />
              <Route path="/portfolio/career" element={<CareerMain />} />
              <Route path="/portfolio/study" element={<StudyMain />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <footer className="footer">
        Copyright 2023. Kim YeoWon all rights reserved.
        <br />
        연락처 : 010-6577-4824
      </footer>
    </div>
  );
}
export default App;

