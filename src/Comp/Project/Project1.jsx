import React from "react";


function Project1() {
	return (
		<div>
			<div className="profile_2"><img src={require("./react.jpg")} width="50%" height="auto" /></div>
			<br />
			<br />
			<div className="article_font">
				<a>react 기반으로 진행한 프로젝트다.</a><br />
				<a>component, useState 등의 리액트 기능을 적절히 사용하였다.</a><br />
				<a>핵심 기술은 동적으로 게시판 리스트가 생성되는 기술이다.</a><br />
				<a>학교 사이트를 발전시키려 했다는데 의의가 있다.</a>
			</div>
		</div>
	);
}

export default Project1;