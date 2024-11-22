import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Nav from "./Nav";
import LoginForm from "./shared/LoginForm";

function App() {
  const prop={
    name:'Fred'
  }
  return (
    <div className="App">
      <Nav />
      <LoginForm name='Fred' />
      <LoginForm name='Rose' />
      <LoginForm name='Jon' />
    </div>
  );
}

export default App;
