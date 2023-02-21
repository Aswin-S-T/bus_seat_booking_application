import React, { useState } from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import "./style.scss";

function App() {
	
	return (
		<div>
			<header className="p-2">
				<Header />
			</header>
			<main>
				<HomeScreen />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
