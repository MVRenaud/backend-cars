/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import axios from "../util/axiosInstance";
import { Link } from "react-router-dom";


function ListCars() {
	const [cars, setCars] = useState([]); 
	const getListOfCars = async () =>{
		const response = await axios.get("/api/cars/list");

		setCars(response.data.cars);
		if(response.status === 200){
			//everything went well! 
			console.log("Cars list", response);
		}
	};

	useEffect(()=>{
		getListOfCars();
	}, []);


	return (
		<div>
			<h1>List of cars</h1>
			{cars.map((car)=>(
				<div className="w-25 d-flex card justify-content-center">
					<div className="card-body">
						<h5 className="card-title">{car.type}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{car.makes}</h6>
						<p className="card-text">{car.year}{car.color}</p>
						<p className="card-text">{car.price}</p>
						<Link to={`/cars/${car._id}`} className="card-link">Select Car</Link>
					</div>
				</div>
			))}
		</div>);
}

export default ListCars;
