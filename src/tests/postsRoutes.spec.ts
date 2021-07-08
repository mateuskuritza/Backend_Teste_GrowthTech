import supertest from "supertest";
import app from "../app";

describe("Users routes", () => {
	test("/users get all users (10)", async () => {
		const result = await supertest(app).get("/posts");
		expect(result.body.length).toEqual(100);
		expect(result.statusCode).toEqual(200);
	});
});
