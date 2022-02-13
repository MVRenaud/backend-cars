/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import axios from "../util/axiosInstance";
import {useParams, useNavigate} from "react-router-dom";
import CarUpdate from "../components/CarUpdate";


function CarType() {
	const [cars, setCars] = useState([]); 
	const [isUpdate, setIsUpdate] = useState(false);
	const {id} = useParams();  
	const navigate = useNavigate();


	const getCarsById = async () =>{
		const response = await axios.get(`/api/cars/${id}`);
    
		console.log(id);
		console.log(response);
		setCars(response.data.car);
	};
	console.log("checking update", cars);
	useEffect(()=>{
		getCarsById();
	}, []);

	const setUpdate = ()=>{
		const upDateValue = !isUpdate;
		setIsUpdate(upDateValue);
		console.log("This is upDateValue",upDateValue);
	};

	const deleteCar = async () =>{
		try {
			const response = await axios.delete(`/api/cars/delete/${id}`);
    
 
			console.log(response);
			if(response.status === 200){
				//everything went well! 
				console.log("Car was deleted");
				navigate("/list");
			}
		} catch (error) {
			console.log("Car was not Deleted");
		}
	};

   

	return( 
		<div>
			{isUpdate ? <CarUpdate car={cars} /> : (<div className="w-25 d-flex card justify-content-center">
				<div className="card-body">
					<h5 className="card-title">{cars.type}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{cars.makes}</h6>
					<p className="card-text">{cars.year}{cars.color}</p>
					<p className="card-text">{cars.price}</p> 
					<a onClick={deleteCar} className="card-link">Delete Car</a>
					<a onClick={setUpdate} className="card-link">Update Car</a>

				</div>
			</div>)}
        

		</div>
	);
}

export default CarType;

