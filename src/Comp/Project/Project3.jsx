import React from "react";

function Project3() {
	return (
		<div>
			<div className="profile_2"><img src={require("./Spring.jpg")} width="30%" height="auto" /></div>
			<br />
			<br />
			<div className="article_font">
				<a>앱으로 하는 첫 프로젝트로 Spring 기반으로 진행되었다.</a><br />
				<a>생활비를 아끼고자 동거를 찾는 현대의 흐름에 맞춰 개발한 앱이다.</a><br />
				<a>KYC인증을 통해 낯선 사람과의 매칭이라는 불안함을 해소하였다.</a><br />
				<a>핵심 기술은 '아이디 찾기/ 비밀번호 변경' 기능으로 coolsms API를 통해 구현하였다.</a><br />
				<a>졸업프로젝트로 진행중이라는 점에서 의의가 있다.</a>
			</div>
		</div>
	);
}

export default Project3;