import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Nav from "./Nav";
import Login from "./shared/Login";
import { Home } from "./shared/Home.js";
import Credential from "./shared/Credential";
import Welcome from "./shared/Welcome.js";
import Services from "./shared/Services";
import Contact from "./shared/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  // const [role, setRole] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(null);
  const [isAdmin, setIsAdmin] = useState((state) => {
    const user = JSON.parse(localStorage.getItem("clientCookie"));
    console.log(user);
    return user && user.isAdmin === "isAdmin";
  });

  return (
    <Router>
      <div className="App">
        {isAdmin ? (
          <Nav setIsAdmin={setIsAdmin} setLogoutMessage={setLogoutMessage} />
        ) : (
          <>
            <h1>{logoutMessage}</h1>
          </>
        )}
        <Routes>
          <Route path="/about" element={<Credential />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Welcome setIsAdmin={setIsAdmin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
