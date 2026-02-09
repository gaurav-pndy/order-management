import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/cartContext";
import CartItem from "./CartItem";

const Cart = ({ onCheckout }) => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-xl shadow p-6 sticky top-10 md:max-h-[85vh] h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <ShoppingCart size={20} />
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center  py-8">
          <ShoppingCart size={60} className="text-gray-300" />
          <p className="text-gray-400 text-xl mt-4">Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-4 font-bold">Total: ₹{total}</div>

          <button
            disabled={cart.length === 0}
            onClick={onCheckout}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 flex gap-2 items-center justify-center cursor-pointer transition-all duration-300"
          >
            Proceed to Checkout <ArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
