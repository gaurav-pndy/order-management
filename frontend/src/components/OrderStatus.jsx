import { useEffect, useState } from "react";
import { fetchOrder } from "../services/api";
import { ClipboardCheck, CookingPot, Truck, Loader } from "lucide-react";

const STATUS_CONFIG = {
  "Order Received": {
    icon: ClipboardCheck,
    color: "text-gray-500",
  },
  "Preparing your Order...": {
    icon: CookingPot,
    color: "text-orange-500",
  },
  "Out for Delivery!": {
    icon: Truck,
    color: "text-green-600",
  },
};

const OrderStatus = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrder(orderId).then(setOrder);
    }, 3000);

    return () => clearInterval(interval);
  }, [orderId]);

  if (!order) {
    return (
      <div className="flex justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  const { icon: Icon, color } = STATUS_CONFIG[order.status];

  return (
    <div className="bg-white p-8 rounded-xl shadow max-w-md w-full text-center">
      <h2 className="text-2xl font-semibold mb-6">Order Status</h2>

      <div className={`flex flex-col items-center gap-3 ${color}`}>
        <Icon size={60} />
        <p className="text-lg font-medium">{order.status}</p>
      </div>

      <p className="text-gray-400 mt-6 text-sm">Order ID: {orderId}</p>
    </div>
  );
};

export default OrderStatus;
