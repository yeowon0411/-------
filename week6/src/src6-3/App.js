import React, { useReducer } from "react";
const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    student: "student",    // name : value 
    school: "school",
    hobby: "hobby"
  });
  const { student, school, hobby } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="student" value={student} onChange={onChange} />
        <br />
        <input name="school" value={school} onChange={onChange} />
        <br />
        <select name="hobby" value={hobby} onChange={onChange}>
          <option value="영화감상"> 영화감상 </option>
          <option value="게임"> 게임 </option>
          <option value="운동"> 운동 </option>
          <option selected value="독서">독서</option>
          <option value="기타"> 기타 </option>
        </select>
      </div>
      <div>
        {student}님은 {school}에 재학중입니다.
        <br />
        {student}님의 취미는 {hobby}입니다.

      </div>
    </div>
  );
};

function reducer(state, action) {
  return {
    ...state, // 상태 값 읽음
    [action.name]: action.value, // 상태값 적용
  };
}

export default App;
