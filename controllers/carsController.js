const Cars = require("../models/CarSchema");

// Creat new car 
exports.createCars = async (req, res) =>{
	const { body } = req;

	try {
		const newCar = await Cars.create({
			type: body.type,
			makes: body.makes,
			year: body.year,
			color: body.color,
			price: body.price
		});

		return res.status(200).json({message:"Car Created", newCar});
	} catch (error) {
		console.log(error);
		return res.status(400).json({message:"Error happened"});   
	}
};
// List all cars
exports.listCars = async(req, res) =>{
	const page = Number(req.query.page) || 1;
	const pageSize = Number(req.query.pageSize) || 10;
	const skipRows = (page - 1) * pageSize; //calculating how many items to skip. 

	try {
		const cars = await Cars.find().skip(skipRows).limit(pageSize);

		return res.status(200).json({message:"list of cars", cars});
	} catch (error) {
		return res.status(400).json({message:"Error happened"});
	}
};

// Update Cars items
exports.updateCarsById = async(req, res) =>{
	const { body } = req;

	try {
		const carToUpdate = await Cars.findByIdAndUpdate(req.params.id, {
			type: body.type,
			makes: body.makes,
			year: body.year,
			color: body.color,
			price: body.price
		}, {new:true});

		if(!carToUpdate) return res.status(404).json({message:"Car not found"});

		return res.status(200).json({message:"Car updated", carToUpdate});
	} catch (error) {
		return res.status(400).json({message:"Error happened"});  
	}
};


// Get car by Id
exports.getCarById = async(req, res) => {
	try{
		const car = await Cars.findById(req.params.id);
		console.log(req.params.id);
		return res.status(200).json({ message: "Car Info", car });
	} catch(error){
		console.log("The error is ", error);

		return res
			.status(400)
			.json({ message: "Something went wrong getting car", error: error });
	}
};

// Delete car by Id
exports.deleteCar = async (req, res) => {
   
	try {
		const car = await Cars.findByIdAndDelete(req.params.id);

		if(!car){
			return res.status(404).json("Car not found");
		}
     
		return res.status(200).json(car); 
	} catch (error) {
		return res.status(500).json({message:"Error happened", error:error});
	}

};

