import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dettagli/:id" element={<Details />}></Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
