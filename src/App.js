// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CocktailsPage from './pages/CocktailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fetch" element={<CocktailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
