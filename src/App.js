import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Like from "./pages/like/Like";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
