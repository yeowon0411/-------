import "./Article2.css";

function Article2() {
    return (
        <div className="sub_article_2">
            <div className="profile_2"><img src={require("./탕.png")} width="100px" height="120px" /></div>
            <br />
            <a className="title_2" >탕후루 많이 먹기 대회 우승<br /></a>
            <a>통귤 탕후루로 승부를 두다.<br />
                한번에 5개까지도 먹어...</a>
        </div>
    );
}
export default Article2;