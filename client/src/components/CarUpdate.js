/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import axios from "../util/axiosInstance";
import { useNavigate } from "react-router-dom";


function CarUpdate({car}) {
	const navigate = useNavigate();
	const updateOfCar = async (event) =>{
		event.preventDefault();
		const formData = new FormData(event.target);

		const data = {
			type:formData.get("type"),//get the data from the input with name firstname
			makes:formData.get("makes"),//get the data from the input with name lastname
			year:formData.get("year"),//get the data from the input with name username
			color: formData.get("color"),//...
			price: formData.get("price"),
		};

		//   const {type, makes, year, color, price} = data
		const response = await axios.patch(`/api/cars/update/${car._id}`, {color:data.color} );
    
		console.log(car._id);
		console.log(response);
		if(response.status === 200){
			//everything went well! 
			console.log("Car was update");
			navigate("/list");
		}
    
	};
    
  
	return( 
		<div>
			<div className="m-5 p-3 d-flex justify-content-center">
				<form className="p-4 m-5 border border-dark border-2" onSubmit={updateOfCar}>
					<h3>Update Cars</h3>
					<h5 className="card-title">{car.type}</h5>
					<div className="m-3 form-group">
						<label>Car's type</label>
						<input type="text" name="type"  className="form-control" placeholder="Type" />
					</div>
					<h6 className="card-subtitle mb-2 text-muted">{car.makes}</h6>
					<div className="m-3 form-group">
						<label>Car's brand</label>
						<input type="text" name="brand"   className="form-control" placeholder="Brand" />
					</div>
					<h6 className="card-subtitle mb-2 text-muted">{car.year}</h6>
					<div className="m-3 form-group">
						<label>Car's year</label>
						<input type="text" name="year"  className="form-control" placeholder="Year" />
					</div>
					<h6 className="card-subtitle mb-2 text-muted">{car.color}</h6>
					<div className="m-3 form-group">
						<label>Car's color</label>
						<input type="text"  name="color"  className="form-control" placeholder="Color" />
					</div>
					<h6 className="card-subtitle mb-2 text-muted">{car.price}</h6>
					<div className="m-3 form-group">
						<label>Car's price</label>
						<input type="text" name="price"  className="form-control" placeholder="price" />
					</div>
					<button className="btn btn-primary btn-block">Update Car</button>
  
				</form>
			</div>
        

		</div>
	);
}

export default CarUpdate;
