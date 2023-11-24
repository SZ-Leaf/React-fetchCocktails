// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './pages/CocktailsPage';
import HomePage from './pages/HomePage';
import CocktailRandom from "./pages/CocktailRandom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fetch" element={<CocktailsPage />} />
        <Route path="/random" element={<CocktailRandom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
