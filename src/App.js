import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/page/HomePage";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";
import StoryPage from "./components/page/StoryPage";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element=<HomePage/> />
        <Route path="/story" element=<StoryPage/> />
      </Routes>
      <Footer />
    </Router>
      
  );
}

export default App;