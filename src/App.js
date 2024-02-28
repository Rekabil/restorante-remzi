import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/HomePage";
import MyFooter from "./components/MyFooter";
import ChiSiamo from "./components/ChiSiamo";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
