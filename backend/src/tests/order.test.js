const request = require("supertest");
const app = require("../app");

describe("POST /api/orders", () => {
  it("should create a new order", async () => {
    const res = await request(app)
      .post("/api/orders")
      .send({
        items: [{ menuItemId: "1", quantity: 1 }],
        customer: {
          name: "Test User",
          address: "Test Address",
          phone: "1234567890",
        },
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.orderId).toBeDefined();
  });

  it("should fetch order by id", async () => {
    const createRes = await request(app)
      .post("/api/orders")
      .send({
        items: [{ menuItemId: "1", quantity: 1 }],
        customer: {
          name: "Test User",
          address: "Test Address",
          phone: "1234567890",
        },
      });

    const orderId = createRes.body.orderId;

    const getRes = await request(app).get(`/api/orders/${orderId}`);

    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.status).toBe("Order Received");
  });
});
