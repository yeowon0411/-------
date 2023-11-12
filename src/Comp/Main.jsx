
import Intro from "./Intro/Intro";
import Project from "./Project/Project";
import Article from "./Article/Article";
import Article2 from "./Article/Article2";
import Study from "./Study/Study";
import Career from "./Career/Career";

function Main() {
    return (
        <div>
            <div className="a">
                <Intro />
                <Article />
            </div>
            <hr />
            <div className="b">
                <Article2 />
                <Project />
            </div>
            <hr />
            <div>
                <Career />
                <Study />
            </div>
        </div>
    );
}
export default Main;

