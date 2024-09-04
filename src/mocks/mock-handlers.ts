import { http } from "msw";

const signupResolver = async ({ request }: { request: Request }) => {
	const { email } = await request.json();
	return Response.json({
		id: "0",
		login: email,
	});
};
const loginResolver = async () => {
	return Response.json({
		token: "000001",
	});
};

const signupHandler = http.post("/api/signup", signupResolver);
const loginHandler = http.post("/api/login", loginResolver);

export const handlers = [signupHandler, loginHandler];
