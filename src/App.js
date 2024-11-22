import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Nav from "./Nav";
import Welcome from "./shared/Welcome";
function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Welcome to my First React-App</h1>
      <p>This is my first component</p>
      <Greeting />
      <Welcome name="Fred" password="12345678" />
    </div>
  );
}

export default App;
