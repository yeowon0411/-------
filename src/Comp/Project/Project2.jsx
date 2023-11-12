import React from "react";

function Project2() {
	return (
		<div>
			<div className="profile_2"><img src={require("./node.jpg")} width="50%" height="auto" /></div>
			<br />
			<br />
			<div className="article_font">
				<a>node.js 기반으로 한 쇼핑몰 프로젝트다.</a><br />
				<a>로그인& 로그아웃, 게시판, 쇼핑몰 리스트, 구매, 장바구니 등의 기능을 구현했다.</a><br />
				<a>핵심 기술은 stock컬럼을 사용하여 3개의 테이블(고객, 책정보, 판매)을 조인하여 만든 기능으로</a><br />
				<a>여러 계정이 동시에 구매할 때 재고에 따라 구매가 가능한지 불가능한지 나뉘게 만들었다.</a><br />
				<a>첫 프로젝트라는 의의가 있다.</a>
			</div>
		</div>
	);
}

export default Project2;