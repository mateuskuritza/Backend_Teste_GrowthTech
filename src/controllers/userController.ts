import { Request, Response } from "express";
import fetch from "node-fetch";

const userController = {
	async getAllUsers(req: Request, res: Response) {
		try {
			const response = (await fetch("http://jsonplaceholder.typicode.com/users")).json();
			res.send(await response);
		} catch {
			res.sendStatus(500);
		}
	},
};

export default userController;
