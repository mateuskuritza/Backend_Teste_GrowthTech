import { Post } from "@models/postModel";

describe("PostModel", () => {
	test("typing", () => {
		const testInfos = {
			userId: 1,
			id: 1,
			title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
		};

		const post = new Post(testInfos);
		expect(post.infos).toEqual(testInfos);
	});
});
