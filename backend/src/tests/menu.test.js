const request = require("supertest");
const app = require("../app");

describe("GET /api/menu", () => {
  it("should return menu items", async () => {
    const res = await request(app).get("/api/menu");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
