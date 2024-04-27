
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
import MessageBoard from './Components/Message Board/MessageBoard';
import EditMessage from './Components/Message Board/EditMessage';
import PokeSearch from './Components/Pokemon Generator/PokeSearch';


function App() {
  return (
    <header>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutMe />} path="/AboutMe" />
          <Route element={<MessageBoard />} path="/MessageBoard" />
          <Route element={<EditMessage />} path="/EditMessage/:id" />
          <Route element={<PokeSearch />} path="/PokeSearch" />
        </Routes>
      </Router>
    </header>
  );
}

export default App;
