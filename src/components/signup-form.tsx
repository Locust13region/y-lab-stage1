import { useState } from "react";
import InputField from "./input-field";
import SubmitButton from "./submit-button";
import { handleSubmit } from "../services/handlers";

const SignupForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const formName = "loginForm";
	return (
		<>
			<form
				id={formName}
				onSubmit={(event) =>
					handleSubmit(event, {
						name: name,
						email: email,
						password: password,
					})
				}
			>
				<InputField
					classes={"formInput"}
					type="text"
					title="Name must be 3-10 characters long and can only include letters, numbers, dots and underscores."
					placeholder={"Name"}
					value={name}
					pattern="[a-zA-Z0-9._]{3,10}"
					inputOnChange={(event) => setName(event.target.value)}
				/>
				<InputField
					classes={"formInput"}
					type="email"
					title="Enter valid e-mail"
					placeholder={"E-mail"}
					value={email}
					inputOnChange={(event) => setEmail(event.target.value)}
				/>
				<InputField
					classes={"formInput"}
					type="text"
					title="Enter you password"
					placeholder={"Password"}
					value={password}
					inputOnChange={(event) => setPassword(event.target.value)}
				/>
			</form>
			<SubmitButton
				label="Signup"
				formName={formName}
			/>
		</>
	);
};
export default SignupForm;
