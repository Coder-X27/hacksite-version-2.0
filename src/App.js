import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Goals from './components/goals/Goals';
import About from './components/About/About';
function App() {
  return (
    <>
    <Router>
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home/>
              }
            />
            <Route
              path="/services"
              element={
                <Services/>
              }
            />
            <Route
              path="/about"
              element={
                <About/>
              }
            />
            <Route
              path="/goals"
              element={
                <Goals/>
              }
            />
            <Route
              path="/login"
              element={
                <Login/>
              }
            />
          </Routes>
        </>
    </Router>
    </>
  );
}

export default App;
