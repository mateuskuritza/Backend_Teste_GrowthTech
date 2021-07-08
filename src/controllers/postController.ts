import { Request, Response } from "express";
import fetch from "node-fetch";

const postController = {
	async getAllPosts(req: Request, res: Response) {
		try {
			const response = (await fetch("http://jsonplaceholder.typicode.com/posts")).json();
			res.send(await response);
		} catch {
			res.sendStatus(500);
		}
	},
};

export default postController;
