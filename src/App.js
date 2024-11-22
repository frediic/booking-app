import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Welcome to my First React-App</h1>
      <p>This is my first component</p>
      <Greeting />
    </div>
  );
}

export default App;
