import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
	return (
		<div className='App'>
			<Route path='/' exact>
				<Landing />
			</Route>
			<Route path='/pokemons' exact>
				<Nav />
				<Home />
			</Route>
			<Route path='/pokemons/:id' exact>
				<Nav />
				<Detail />
			</Route>
		</div>
	);
}

export default App;
