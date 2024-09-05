import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import LoginForm from "./components/login-form";
import RadioButton from "./components/radio-button";
import SignupForm from "./components/signup-form";

function App() {
	const [isLogin, setLogin] = useState(true);
	const duration = 200;
	return (
		<>
			<div className="container">
				<CSSTransition
					in={isLogin}
					timeout={duration}
					classNames="fade"
				>
					<h1 className="title">{isLogin ? "Login Form" : "Sighup Form"}</h1>
				</CSSTransition>
				<ul className="radioControls">
					<CSSTransition
						in={isLogin}
						timeout={duration}
						classNames="fade"
					>
						<RadioButton
							label="Login"
							selected={isLogin}
							onSelect={() => setLogin(true)}
						/>
					</CSSTransition>
					<CSSTransition
						in={isLogin}
						timeout={duration}
						classNames="fade"
					>
						<RadioButton
							label="Signup"
							selected={!isLogin}
							onSelect={() => setLogin(false)}
						/>
					</CSSTransition>
				</ul>
				<CSSTransition
					in={isLogin}
					timeout={200}
					classNames="fade"
				>
					{isLogin ? <LoginForm /> : <SignupForm />}
				</CSSTransition>
			</div>
		</>
	);
}

export default App;
