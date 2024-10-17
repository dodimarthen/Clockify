import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "johncena",
      },
    });
  });

  // Positive test case: Successful registration of a new user
  it("Should be able to register a new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "johncena",
      password: "rahasia",
      name: "John Cena Ambarawa",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("johncena");
    expect(result.body.data.name).toBe("John Cena Ambarawa");
    expect(result.body.data.password).toBeUndefined();
  });

  it("Should not be able to register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    console.log(result.body);
    expect(result.status).toBe(400);
    expect(result.body.error).toBeDefined();
  });
});
