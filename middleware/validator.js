const Ajv = require("ajv");

exports.validateCar = (req, res, next)=>{
	const ajv = new Ajv();
	const schema = {
		type: "object",
		properties: {
			type: {type: "string"},
			makes: {type: "string"},
			year: {type: "string"},
			color: {type: "string"},
			price: {type: "string"}
		},
		required: ["type", "makes", "year", "color", "price"],
		additionalProperties: false
	};

	const validate = ajv.compile(schema);



	const valid = validate(req.body);
	if (!valid){
		return res.status(400).json({ message:"Bad Request", errors:validate.errors });
	}
	next();
};

exports.validateUpdate = (req, res, next)=>{
	const ajv = new Ajv();
	const schema = {
		type: "object",
		properties: {
			type: {type: "string"},
			makes: {type: "string"},
			year: {type: "string"},
			color: {type: "string"},
			price: {type: "string"}
		}
	};
	const validate = ajv.compile(schema);
	const valid = validate(req.body);
	if (!valid){
		return res.status(400).json({ message:"Bad Request", errors:validate.errors });
	}
	next();
};