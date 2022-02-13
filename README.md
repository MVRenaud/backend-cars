# Backend-project car App

#### This is a Backend project. In this project, I wanted to build an application that uses the Express.JS framework to expose a RESTful API to manage cars

##### Car is an artificial resource that you can freely design. In this project the cars have 5 different properties, e.g. Type(truck, Sports, family &, etc..), Makes or Brand(Ford, Toyota &, etc..), year, colors, and prices

##### On this project, using node or insonia, you are able to create a new car with the post method: <http://localhost:3001/api/cars/add>

##### list all created cars with the get method: <http://localhost:3001/api/cars/list>

##### select a single car by Id with the get method: <http://localhost:3001/api/cars/:id>

##### update single properties of a single car with the patch method: <http://localhost:3001/api/cars/update/:id>

##### delete an individual car with the delete method: <http://localhost:3001/api/cars/delete/:id>

##### This backend application connects to MongoDB using the mongoose package. I used a fully un-authenticated database. My individual API handlers update the data-set within the database

##### I implement JSON-schema validation using the ajv package

##### I did connect to a React application, where I didn't give much effort on the styling yet. On your terminal go to the client folder, then run npm start. The web page will first show the creat car form. After submitting the form, you will be directed to the list of created cars. Select the car, you will have the option of updating or deleting the car
