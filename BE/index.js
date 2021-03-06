const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

// Create express app
const app = express();
app.use(cors())

// Setup the server port
const port = process.env.PORT || 5000;

// Parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse request data content type application/json
app.use(bodyParser.json());

// Listen to the port
app.listen(port, () => {
  console.log("Express Server is running on port", port);
});

// Define root route
app.get("/", (rep, res) => {
  res.send("I belong to Jesus");
});

// Import mc quesion routes
const mcRoutes = require("./src/routes/mc.route");
app.get("/multi-choice", mcRoutes);
app.get("/multi-choice/:id", mcRoutes);
app.post("/multi-choice", mcRoutes);
app.put("/multi-choice/:id", mcRoutes);
app.delete("/multi-choice/:id", mcRoutes);

// Import essay quesion routes
const essayRoutes = require("./src/routes/essay.route");
app.get("/essay", essayRoutes);
app.get("/essay/:id", essayRoutes);
app.post("/essay", essayRoutes);
app.put("/essay/:id", essayRoutes);
app.delete("/essay/:id", essayRoutes);


// Import candidate routes
const candidateRoutes = require("./src/routes/candidate.route");

// Create candidate routes
app.use("/", candidateRoutes);


