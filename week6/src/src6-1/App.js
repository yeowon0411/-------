import { useState } from "react";
function App(props) {
  const [isLoged, setIsLoged] = useState(false);
  const handleLoginClick = () => {
    setIsLoged(true);
  };
  const handleLogoutClick = () => {
    setIsLoged(false);
  };

  /*const setClick = () => {
    setIsLoged((prev)=>!prev);
  };*/
  return (
    <div>
      <Greeting isLoged={isLoged} />
      {isLoged ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

function Greeting(props) {
  const isLoged = props.isLoged;

  if (isLoged) {
    return <h2> 두목! 다시 오셨군요 !! </h2>;
  }
  return <h2>로그인 해주십사 !!</h2>;
}

function LoginButton(props) {
  return(<button onClick={props.onClick}>로그인</button>)
}

function LogoutButton(props) {
  return(<button onClick={props.onClick}>로그아웃</button>)
}

export default App;