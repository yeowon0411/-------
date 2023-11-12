import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <header className="header">
            <a  style={{ textDecoration: "none", color:"black"}} href="/portfolio"> 여원 일보</a>
            </header>
            <hr className="black"/>
            <div className="line">
                <div>가천대학교</div>
                <div>컴퓨터공학과</div>
                <div>202035128 김여원</div>
            </div>
            <hr className="black"/>
        </div>
    );
}
export default Header;