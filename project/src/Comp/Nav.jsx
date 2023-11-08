import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <Link to={"/Career"}>Career</Link>
            <Link to={"/Project"}>Project</Link>
            <Link to={"/Study"}>Study</Link>
        </nav>
    );
}
export default Nav;
