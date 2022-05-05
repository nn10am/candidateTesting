const express = require("express");

// Create express app
const app = express();

// Setup the server port
const port = process.env.PORT || 5000;

// Define root route
app.get("/", (rep, res) => {
  res.send("I belong to Jesus");
});

// Import candidate routes
const candidateRoutes = require("./src/routes/employee.route");

// Create candidate routes
app.use("/api/candidate", candidateRoutes);

// Listen to the port
app.listen(port, () => {
  console.log("Express Server is running on port", port);
});
