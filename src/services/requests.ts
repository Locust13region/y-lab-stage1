import { HandleSubmitProps } from "../types/types";

export const userRequest = async (data: HandleSubmitProps) => {
	const url = data.name ? "/api/signup" : "/api/login";
	const body = data.name
		? data
		: { email: data.email, password: data.password };

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...body }),
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		console.log("fetch error", error);
	}
};
