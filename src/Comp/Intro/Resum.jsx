import "./Resum.css";


function Resum() {
  return (
    <div className="border">
      <div className="header_1" style={{ margin: 'auto' }}>
        <div>
          <img src={require("./증사.png")} style={{ height: '350px', paddingTop: '50px', paddingLeft: '30px', float: 'left' }} />
        </div>
        <div style={{ width: '300px', height: '200px', textAlign: 'right', paddingTop: '200px', paddingRight: '60px', float: 'right' }}>
          <p style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '40px', fontWeight: '600', color: 'gray' }}>'아이디어뱅크'</span>
            <br />
            <span style={{ fontSize: '50px', fontWeight: '700' }}>김 여 원</span>
            <br />
            <span style={{ fontSize: '45px', fontWeight: '400' }}>Kim YeoWon</span>
          </p>
        </div>
      </div>

      <div className="body-container" style={{ width: '1000px', margin: '0 auto' }}>
        <div className="body-container" style={{ width: '460px', float: 'left' }}>
          <table className="table" border="1" style={{ width: '460px', height: '170px' }}>
            <thead>
              <tr>
                <td width="100" style={{ fontSize: '25px', fontWeight: '700' }}>기본사항<span style={{ fontSize: '20px', fontWeight: '600px', color: 'gray' }}>&nbsp;&nbsp;PERSONAL DETAIL</span></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="100"><i className="fa-solid fa-user"></i> 2000.04.11(만 23세)</td>
              </tr>
              <tr>
                <td width="100"><i className="fa-solid fa-phone"></i> 010.6577.4824</td>
              </tr>
              <tr>
                <td width="100"><i className="fa-solid fa-envelope"></i> dudnjsdl11@naver.com</td>
              </tr>
            </tbody>
          </table>

          <table className="table" border="1" style={{ width: '460px', height: '170px' }}>
            <thead>
              <tr>
                <td width="100" colSpan="3" style={{ fontSize: '25px', fontWeight: '700' }}>학력사항<span style={{ fontSize: '20px', fontWeight: '600px', color: 'gray' }}>&nbsp;&nbsp;EDUCATION</span></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2013년~2015년</td>
                <td style={{ textAlign: 'center' }}>하안북중학교</td>
                <td style={{ textAlign: 'right' }}>인문계열</td>
              </tr>
              <tr>
                <td>2016년~2018년</td>
                <td style={{ textAlign: 'center' }}>광명북고등학교</td>
                <td style={{ textAlign: 'right' }}>인문계열</td>
              </tr>
              <tr>
                <td>2020년~현재</td>
                <td style={{ textAlign: 'center' }}>가천대학교</td>
                <td style={{ textAlign: 'right' }}>컴퓨터공학과</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="body-container" style={{ float: 'left', width: '460px' }}>
          <table className="table" border="1" style={{ width: '460px', height: '170px' }}>
            <thead>
              <tr>
                <td width="100" colSpan="3" style={{ fontSize: '25px', fontWeight: '700' }}>자격증<span style={{ fontSize: '20px', fontWeight: '600px', color: 'gray' }}>&nbsp;&nbsp;LICENSE</span></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="100">운전면허증</td>
                <td width="100">2025</td>
                <td width="100">경찰청</td>
              </tr>
              <tr>
                <td width="100">HSK</td>
                <td width="100">2023</td>
                <td width="100">HSK한국사무국</td>
              </tr>
              <tr>
                <td width="100">리눅스 마스터</td>
                <td width="100">2025</td>
                <td width="100">한국정보통신</td>
              </tr>
            </tbody>
          </table>

          <table className="table" border="1" style={{ width: '460px', height: '170px' }}>
            <thead>
              <tr>
                <td width="100" colSpan="3" style={{ fontSize: '25px', fontWeight: '700' }}>기술<span style={{ fontSize: '20px', fontWeight: '600px', color: 'gray' }}>&nbsp;&nbsp;SKILLS</span></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="100">React</td>
                <td width="100">●●●●●</td>
              </tr>
              <tr>
                <td width="100">Spring</td>
                <td width="100">○○●●●</td>
              </tr>
              <tr>
                <td width="100">Node</td>
                <td width="100">○●●●●</td>
              </tr>
              <tr>
                <td width="100">C++</td>
                <td width="100">○○○●●</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="body-container">
        <table class="table" border="1" style={{ width: '980px', margin: 'auto' }}>

          <thead>
            <tr>
              <td width="100" colSpan="3" style={{ fontSize: '25px', fontWeight: '700' }}>대외활동 <span
                style={{ fontSize: '20px', fontWeight: '600', color: 'gray' }}>&nbsp;&nbsp;EXPERIENCE CAREER</span></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>쇼핑몰 프로젝트</td>
              <td style={{ textAlign: 'center' }}>2022.09.01.-2022.12.17.</td>
              <td style={{ textAlign: 'right' }}>풀스택 개발</td>
            </tr>
            <tr>
              <td>"가생이" 졸업 프로젝트</td>
              <td style={{ textAlign: 'center' }}>2023.07.20-현재</td>
              <td style={{ textAlign: 'right' }}>Spring백엔드</td>
            </tr>
            <tr>
              <td>"코딩 알리미" 봉사활동</td>
              <td style={{ textAlign: 'center' }}>2018.09.20~2020.10.30</td>
              <td style={{ textAlign: 'right' }}>행사 주관 및 행사 참여</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="body-container">
        <table class="table" border="1" style={{ width: '980px', margin: 'auto' }}>

          <thead>
            <tr>
              <td width="100" colSpan="3" style={{ fontSize: '25px', fontWeight: '700' }}>경력사항 <span
                style={{ fontSize: '20px', fontWeight: '600', color: 'gray' }}>&nbsp;&nbsp;WORK EXPERIENCE</span></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>이원 수학학원 (직급: 선생님)</td>
              <td style={{ textAlign: 'center' }}>2021.01.01~2021.10.30</td>
              <td style={{ textAlign: 'right' }}>고등부 담임</td>
            </tr>
            <tr>
              <td>몽's Pizza(직급:아르바이트)</td>
              <td style={{ textAlign: 'center' }}>2021.11.01~2022.01.31</td>
              <td style={{ textAlign: 'right' }}>피자 제작</td>
            </tr>
            <tr>
              <td>제2학생생활관 사감실 (직급: 조교)</td>
              <td style={{ textAlign: 'center' }}>2022.06.20~현재</td>
              <td style={{ textAlign: 'right' }}>사감 보조 업무</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Resum;