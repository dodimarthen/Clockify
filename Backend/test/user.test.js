import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await removeTestUser();
  });

  // Positive test case: Successful registration of a new user
  it("Should be able to register a new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
      email: "test@sharkmail.com",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.email).toBeUndefined();
    expect(result.body.data.password).toBeUndefined();
  });

  it("Should not be able to register a new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
      email: "",
    });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("Should reject if username already exist", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
      email: "test@sharkmail.com",
    });

    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.email).toBeUndefined();
    expect(result.body.data.password).toBeUndefined();

    result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
      email: "test@sharkmail.com",
    });

    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe("POST /api/users/login", function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should be able to login", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      email: "test@sharkmail.com",
      password: "rahasia",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe("test");
  });

  it("should not be able to login if request is invalid", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      email: "",
      password: "",
    });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should not be able to login if email is incorrect", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      email: "johndoe@yopmail.com",
      password: "123",
    });

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

  it("should not be able to login if password is incorrect", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      email: "johndoe2@yopmail.com",
      password: "1234",
    });

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
