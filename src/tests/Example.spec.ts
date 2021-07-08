import { User } from "../models/User";

describe("user", () => {
	test("it shoud be ok", () => {
		const user = new User("Mateus", "teste@teste.com");

		expect(user.name).toEqual("Mateus");
	});
});
