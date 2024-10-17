import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "johncenna",
      },
    });
  });

  it("Should be able to register a new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "johncenna",
      password: "rahasia",
      name: "John Cenna Ambarawa",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("johncenna");
    expect(result.body.data.name).toBe("John Cenna Ambarawa");
    expect(result.body.data.password).toBeUndefined();
  });
});
