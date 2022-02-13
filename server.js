const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");


dotenv.config();
const app = express();
app.disable("x-powered-by");


// set application variable "port"
// eslint-disable-next-line no-undef
app.set("port", process.env.PORT || 4000);

// middleware stack
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: true,
	})
);
// read the cookie and add it to the request object under the prop "cookies"
app.use(cookieParser());

// Connecting to MongoDB, and creating DataBase
mongoose
	.connect(
		// eslint-disable-next-line no-undef
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("we are connected to the database.");
	})
	.catch((error) => {
		console.log("an error occurred while connecting ot the db", error);
	});

const carRoutes = require("./routes/carsRoutes");
const path = require("path");

app.use("/api/cars", carRoutes);

// Serve frontend client/build folder
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
	// eslint-disable-next-line no-undef
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(app.get("port"), () => {
	console.log("Server started on port " + app.get("port"));
});
