import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './pages/login/Login';
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
