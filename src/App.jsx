import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import FitnessDemo from "./demos/FitnessDemo";
import RestaurantDemo from "./demos/RestaurantDemo";
import BarberDemo from "./demos/BarberDemo";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/fitness" element={<FitnessDemo />} />
        <Route path="/demos/restaurant" element={<RestaurantDemo />} />
        <Route path="/demos/barber" element={<BarberDemo />} />
      </Routes>
    </>
  );
}

export default App;
