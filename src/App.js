import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
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
