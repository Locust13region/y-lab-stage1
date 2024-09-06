import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import LoginSignupForm from "./components/login-signup-form";
import RadioButton from "./components/radio-button";

function App() {
	const [isLogin, setLogin] = useState(true);
	return (
		<AnimatePresence initial={false}>
			<div className="container">
				<motion.h1
					key={`${isLogin}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="title"
				>
					{isLogin ? "Login Form" : "Sighup Form"}
				</motion.h1>
				<ul className="radioControls">
					{isLogin && (
						<motion.div
							className="movingBackground"
							layoutId="background"
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							style={{ left: 0 }}
						/>
					)}
					{!isLogin && (
						<motion.div
							className="movingBackground"
							layoutId="background"
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							style={{ left: "50%" }}
						/>
					)}
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
				<LoginSignupForm isLogin={isLogin} />
			</div>
		</AnimatePresence>
	);
}

export default App;
