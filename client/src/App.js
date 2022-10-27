import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Create from "./components/Create/Create.jsx";

function App() {
	return (
		<div className='App'>
			<Route path='/' exact>
				<Landing />
			</Route>
			<Route path='/pokemons' exact>
				<Home />
			</Route>
			<Route path='/pokemons/:id' exact>
				<Detail />
			</Route>
			<Route path='/createPokemon'>
				<Create />
			</Route>
		</div>
	);
}

export default App;
