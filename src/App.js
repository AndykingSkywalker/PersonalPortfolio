
import './App.css';
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutMe from './Components/About Me/AboutMe';


function App() {
  return (
    <header>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutMe />} path="/AboutMe" />
        </Routes>
      </Router>
    </header>
  );
}

export default App;
