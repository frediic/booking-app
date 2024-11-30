import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Nav from "./Nav";
import Login from "./shared/Login";
import { Counter } from "./shared/Counter.js";
import Credential from "./shared/Credential";
import About from "./shared/About";
import Services from "./shared/Services";
import Contact from "./shared/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const prop = {
    name: "Fred",
  };
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route path="/about" element={<Credential />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Counter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
