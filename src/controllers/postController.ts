import { Request, Response } from "express";
import fetch from "node-fetch";

const postController = {
	async getAllPosts(req: Request, res: Response) {
		try {
			const posts = await (await fetch("http://jsonplaceholder.typicode.com/posts")).json();
			const users = await (await fetch("http://jsonplaceholder.typicode.com/users")).json();
			const response = posts.map((p) => {
				const user = users.find((u) => u.id === p["userId"]);
				const obj = {
					userId: user.id,
					postId: p.id,
					title: p.title,
					body: p.body,
					name: user.name,
					company: user.company.name,
				};
				return obj;
			});

			res.send(response);
		} catch {
			res.sendStatus(500);
		}
	},
};

export default postController;
