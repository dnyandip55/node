//Create  a Node.js application to use POST HTTP method
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from POST requests
app.use(express.json());

// POST route to handle incoming data
app.post('/submit', (req, res) => {
  // Access the data sent in the request body
  const requestData = req.body;

  // Process the data (replace this with your logic)
  const response = {
    message: 'Data received successfully',
    data: requestData,
  };

  // Send a response back to the client
  res.json(response);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
