import { useState } from "react";
import InputField from "./input-field";
import SubmitButton from "./submit-button";
import { handleSubmit } from "../services/handlers";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const formName = "loginForm";
	return (
		<>
			<form
				id={formName}
				onSubmit={(event) =>
					handleSubmit(event, {
						email: email,
						password: password,
					})
				}
			>
				<InputField
					classes={"formInput"}
					type={"email"}
					title="Enter valid e-mail"
					placeholder={"E-mail"}
					value={email}
					inputOnChange={(event) => setEmail(event.target.value)}
				/>
				<InputField
					classes={"formInput"}
					type={"password"}
					title="Enter you password"
					placeholder={"Password"}
					value={password}
					inputOnChange={(event) => setPassword(event.target.value)}
				/>
			</form>
			<SubmitButton
				label="Login"
				formName={formName}
			/>
		</>
	);
};
export default LoginForm;
