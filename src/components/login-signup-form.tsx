import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import InputField from "./input-field";
import SubmitButton from "./submit-button";
import { handleSubmit } from "../services/handlers";

interface LoginFormProps {
	isLogin: boolean;
}
const LoginSignupForm = ({ isLogin }: LoginFormProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const clearFormData = () => {
		setName("");
		setEmail("");
		setPassword("");
	};
	const isLoginRef = useRef<boolean>();
	useEffect(() => {
		setPassword("");
		isLoginRef.current = isLogin;
	}, [isLogin]);
	return (
		<>
			<motion.form
				key={`${isLogin}`}
				initial={{ height: 0 }}
				animate={{ height: "auto" }}
				exit={{ height: 0 }}
				transition={{ duration: 0.3 }}
				id="form"
				onSubmit={(event) =>
					handleSubmit(
						event,
						{
							name: name,
							email: email,
							password: password,
						},
						clearFormData
					)
				}
			>
				{!isLogin && (
					<InputField
						name="name"
						classes={"formInput"}
						type="text"
						title="Name must be 3-10 characters long and can only include letters, numbers, dots and underscores."
						placeholder={"Name"}
						value={name}
						pattern="[a-zA-Z0-9._]{3,10}"
						inputOnChange={(event) => setName(event.target.value)}
					/>
				)}
				<InputField
					name="email"
					classes={"formInput"}
					type={"email"}
					title="Enter valid e-mail"
					placeholder={"E-mail"}
					value={email}
					inputOnChange={(event) => setEmail(event.target.value)}
				/>
				<InputField
					name="password"
					classes={"formInput"}
					type={isLogin ? "password" : "text"}
					title="Enter you password"
					placeholder={"Password"}
					value={password}
					inputOnChange={(event) => setPassword(event.target.value)}
				/>
			</motion.form>
			<SubmitButton
				label={isLogin ? "Login" : "Sighup"}
				formName="form"
			/>
		</>
	);
};
export default LoginSignupForm;
