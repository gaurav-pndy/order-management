const API_BASE_URL = "https://order-management-0p8a.onrender.com/api";

export const fetchMenu = async () => {
  const res = await fetch(`${API_BASE_URL}/menu`);
  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }
  return res.json();
};

export const placeOrder = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Order failed");
  }

  return res.json();
};

export const fetchOrder = async (orderId) => {
  const res = await fetch(`${API_BASE_URL}/orders/${orderId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }
  return res.json();
};
