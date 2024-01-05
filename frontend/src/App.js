import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages and components
import NavbarComponent from "./components/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
