import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderStatusPage from "./pages/OrderStatusPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:orderId" element={<OrderStatusPage />} />
    </Routes>
  );
}

export default App;
