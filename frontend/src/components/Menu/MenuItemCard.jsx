import { useCart } from "../../context/cartContext";
import { ShoppingCart, IndianRupee } from "lucide-react";

const MenuItemCard = ({ item, setShowCheckout }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="h-48 object-cover rounded mb-4"
      />

      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-gray-600 text-sm flex-1">{item.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="flex items-center font-semibold">
          <IndianRupee size={16} />
          {item.price}
        </span>
        <button
          onClick={() => {
            addToCart(item);
            setShowCheckout(false);
          }}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 cursor-pointer "
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
