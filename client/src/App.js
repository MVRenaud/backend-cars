/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import CreatCar from "./pages/CreatCar";
import ListCars from "./pages/ListCars";
import Navbar from "./components/Navbar";
import CarType from "./pages/CarType";


function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<CreatCar />} />
					<Route path="/list" element={<ListCars />} />
					<Route path="/cars/:id" element={<CarType />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
