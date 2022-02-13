/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
import axios from "../util/axiosInstance";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import React from "react";

function CreatCar() {
	const navigate = useNavigate();


	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("Submit the form");
		const formData = new FormData(event.target);

		const data = {
			type:formData.get("type"),//get the data from the input with name firstname
			makes:formData.get("makes"),//get the data from the input with name lastname
			year:formData.get("year"),//get the data from the input with name username
			color: formData.get("color"),//...
			price: formData.get("price"),
		};

		console.log(data);

		try {
			const response = await axios.post("/api/cars/add", data); 
            
			if(response.status === 200){
				//everything went well! 
				console.log("user was created");
				navigate("/list");
			}

		} catch (error) {
			console.log("Car was not created", error);
            
		}
	};

	return (
		<div className="m-5 p-3 d-flex justify-content-center">
			<form className="p-4 m-5 border border-dark border-2" onSubmit={handleSubmit}>
				<h3>Creat Car</h3>
				<div className="m-3 form-group">
					<label>Car's type</label>
					<input type="text" name="type"  className="form-control" placeholder="Type" />
				</div>
  
				<div className="m-3 form-group">
					<label>Car's brand</label>
					<input type="text" name="brand"   className="form-control" placeholder="Brand" />
				</div>

				<div className="m-3 form-group">
					<label>Car's year</label>
					<input type="text" name="year"  className="form-control" placeholder="Year" />
				</div>
  
				<div className="m-3 form-group">
					<label>Car's color</label>
					<input type="text"  name="color"  className="form-control" placeholder="Color" />
				</div>
  
				<div className="m-3 form-group">
					<label>Car's price</label>
					<input type="text" name="price"  className="form-control" placeholder="price" />
				</div>
				<button className="btn btn-primary btn-block">Creat Car</button>
  
			</form>
		</div>
	);
}

export default CreatCar;
