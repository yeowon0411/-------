import "./Header.css";
function Header() {
    return (
        <div>
            <header className="header">
                여원 일보
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