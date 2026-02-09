import { useParams } from "react-router-dom";
import OrderStatus from "../components/OrderStatus";

const OrderStatusPage = () => {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <OrderStatus orderId={orderId} />
    </div>
  );
};

export default OrderStatusPage;
