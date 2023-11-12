import React from "react";

function Study1() {
	return (
		<div>
			<div className="profile_2"><img src={require("./머신러닝.jpg")} width="80%" height="auto" /></div>
			<br />
			<br />
			<div className="article_font">
				<a>23-1에 DSG라는 데이터 분석 모임에 참여했었다</a><br />
				<a>'일관성 정규화'방식에 대하여 공부를 하고 해당 내용에 대한 발표를 했다.</a><br />
				<a>해당 방식에 쓰인 공식을 자세히 분석하여 전반적 과정을 알게 되었다.</a><br />
				<a href="https://deep-cilantro-902.notion.site/73c5d80a41f749daa320bdacb77f4dca?pvs=4">머신러닝 발표자료를 보고싶다면?</a>
			</div>
		</div>
	);
}

export default Study1;
