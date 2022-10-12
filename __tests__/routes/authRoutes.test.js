const request = require("supertest");
const bcrypt = require("bcryptjs");
const app = require("../../src/app");

describe("auth login routes", () => {
  it("Should return an erro message if email or password id not set", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "",
      password: "",
    });

    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Email or password field is required");
  });

  it("Should return an access_token if the user has been successfully logged", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "wesley.alvesxll@gmail.com",
      password: "teste@123",
    });

    expect(response.status).toBe(200);
    expect(typeof response.body.access_token).toBe("string");
  });

  it("Should return an error message if email or password is wrong", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "wrong@email.com",
      password: "wrong",
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Invalid email or password");
  });
});
