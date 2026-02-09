import { useEffect, useState } from "react";
import { fetchMenu } from "../services/api";
import { useCart } from "../context/cartContext";
import MenuList from "../components/Menu/MenuList";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout";
import MenuSkeleton from "../components/MenuSkeleton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMenu()
      .then(setMenu)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🍽️ Food Menu</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {loading ? (
            <MenuSkeleton />
          ) : (
            <MenuList setShowCheckout={setShowCheckout} menu={menu} />
          )}
        </div>

        <div className="lg:col-span-1">
          {!showCheckout ? (
            <Cart onCheckout={() => setShowCheckout(true)} />
          ) : (
            <Checkout
              onOrderPlaced={(orderId) => {
                navigate(`/order/${orderId}`);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
