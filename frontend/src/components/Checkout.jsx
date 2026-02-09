import { useState } from "react";
import { useCart } from "../context/cartContext";
import { placeOrder } from "../services/api";
import { ArrowRight, Loader } from "lucide-react";

const Checkout = ({ onOrderPlaced }) => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      items: cart.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
      })),
      customer: form,
    };

    try {
      const { orderId } = await placeOrder(orderPayload);
      clearCart();
      onOrderPlaced(orderId);
    } catch (err) {
      alert("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 sticky top-10 md:max-h-[85vh] h-full overflow-y-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>

      <input
        name="name"
        placeholder="Name"
        required
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Address"
        required
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        required
        className="w-full  p-2 border rounded"
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 flex gap-2 items-center justify-center cursor-pointer transition-all duration-300"
      >
        {loading ? (
          <Loader className="animate-spin" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            Place Order <ArrowRight />
          </span>
        )}
      </button>
    </form>
  );
};

export default Checkout;
