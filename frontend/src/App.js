import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// pages and components
import Login from "./components/Login";
import NavbarComponent from "./components/Navbar";
import Signup from "./components/Signup";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const { member } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={member ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={!member ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!member ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:id"
              element={member ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
