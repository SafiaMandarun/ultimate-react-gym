import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Bookings from "./routes/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
        <Route path="bookings" element={<Bookings />}></Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
