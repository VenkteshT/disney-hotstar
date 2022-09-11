import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Movie_Details from "./components/detail/moviedetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Movie_Details />} />
      </Routes>
    </div>
  );
}

export default App;
