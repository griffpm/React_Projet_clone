import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/page/HomePage";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element=<HomePage/> />
      </Routes>
      <Footer />
    </Router>
      
  );
}

export default App;
