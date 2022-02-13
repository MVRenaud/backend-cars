const {Schema, model } = require("mongoose");
// Initialize Car Schema
const CarSchema = new Schema({
	createdOn: { type: Date, required: true, default: Date.now },
	type: { type: String },
	makes: { type: String },
	year: { type: String },
	color: { type: String },
	price: { type: String },

});

const Cars = model("cars", CarSchema);
module.exports = Cars;