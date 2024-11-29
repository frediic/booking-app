import "./App.css";
import Nav from "./Nav";
import { Home } from "./shared/Home.js";
import Login from "./shared/Login.js";
import About from "./shared/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StoreProvider from "./shared/StoreProvider.js";

function App() {
  const prop = {
    name: 'Fred'
  }
  return (
    <StoreProvider>
      <Router>
        <div className="App">
          <Nav />
        </div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>

    </StoreProvider>

  );
}

export default App;
