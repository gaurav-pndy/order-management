import { Minus, Plus } from "lucide-react";
import { useCart } from "../../context/cartContext";

const CartItem = ({ item }) => {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">
          ₹{item.price} × {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 border rounded hover:bg-gray-100"
        >
          <Minus size={14} />
        </button>
        <span className="min-w-5 text-center">{item.quantity}</span>{" "}
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 border rounded hover:bg-gray-100"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
