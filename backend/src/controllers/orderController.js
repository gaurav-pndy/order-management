const { orders } = require("../data/orderData");
const { v4: uuidv4 } = require("uuid");

const createOrder = (req, res) => {
  const { items, customer } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Order items are required" });
  }

  if (!customer?.name || !customer?.address || !customer?.phone) {
    return res.status(400).json({ message: "Customer details are required" });
  }

  const orderId = uuidv4();

  const order = {
    id: orderId,
    items,
    customer,
    status: "Order Received",
    createdAt: new Date().toISOString(),
  };

  orders.set(orderId, order);

  // Simulating status updates
  setTimeout(() => {
    const existingOrder = orders.get(orderId);
    if (existingOrder) {
      existingOrder.status = "Preparing";
    }
  }, 10000);

  setTimeout(() => {
    const existingOrder = orders.get(orderId);
    if (existingOrder) {
      existingOrder.status = "Out for Delivery";
    }
  }, 20000);

  res.status(201).json({ orderId });
};

const getOrderById = (req, res) => {
  const { id } = req.params;

  const order = orders.get(id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
};

module.exports = { createOrder, getOrderById };
