import { useState } from "react";
import "./App.css";
import LoginForm from "./components/login-form";
import RadioButton from "./components/radio-button";
import SignupForm from "./components/signup-form";

function App() {
	const [isLogin, setLogin] = useState(true);
	return (
		<>
			<div className="container">
				<h1 className="title">{isLogin ? "Login Form" : "Sighup Form"}</h1>
				<ul className="radioControls">
					<RadioButton
						label="Login"
						selected={isLogin}
						onSelect={() => setLogin(true)}
					/>
					<RadioButton
						label="Signup"
						selected={!isLogin}
						onSelect={() => setLogin(false)}
					/>
				</ul>
				{isLogin ? <LoginForm /> : <SignupForm />}
			</div>
		</>
	);
}

export default App;
