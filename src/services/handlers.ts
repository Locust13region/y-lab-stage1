import { userRequest } from "./requests";
import type { HandleSubmitProps } from "../types/types";

export const handleSubmit = (
	event: React.FormEvent<HTMLFormElement>,
	data: HandleSubmitProps
) => {
	event.preventDefault();
	userRequest(data).then((result) => console.log(result));
};
