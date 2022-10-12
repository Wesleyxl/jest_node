/* eslint-disable no-undef */

const request = require("supertest");
const app = require("../../src/app");

describe("auth login", () => {
  test("Should return an erro message if email or password id not set", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "",
      password: "",
    });

    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Email or password field is required");
  });

  test("Should return an access_token if the user has been successfully logged", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "wesley.alvesxll@gmail.com",
      password: "teste@123",
    });

    expect(response.status).toBe(200);
    expect(typeof response.body.access_token).toBe("string");
  });

  test("Should return an error message if email or password is wrong", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "wrong@email.com",
      password: "wrong",
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Invalid email or password");
  });
});

describe("auth register", () => {
  test("Should return an error message if the name, email or password is nor set", async () => {
    const response = await request(app).post("/api/auth/register").send({
      name: "",
      email: "",
      password: "",
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe(
      "Name, email and password field is required"
    );
  });

  test("Should return an error message if the user already exists", async () => {
    const response = await request(app).post("/api/auth/register").send({
      name: "Wesley Alves",
      email: "wesley.alvesxll@gmail.com",
      password: "teste@123",
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe("Email already exists");
  });

  test("Should return an access_token if the user has been successfully registered", async () => {
    const response = await request(app).post("/api/auth/register").send({
      name: "Arthur Henrique",
      email: "arthur.henrique@gmail.com",
      password: "teste@123",
    });

    expect(response.status).toBe(200);
    expect(typeof response.body.access_token).toBe("string");
  });
});
