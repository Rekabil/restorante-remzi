import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
