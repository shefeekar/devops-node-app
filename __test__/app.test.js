const request = require("supertest");
const app = require("../index"); // Ensure the correct path to your app file

describe("GET /", () => {
  it("should return a 200 status and a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Welcome"); // Modify based on your actual response
  });
});
