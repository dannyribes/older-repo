// app.js
const express = require('express'); // Import the express module
const cors = require('cors'); // Import the cors module

const app = express(); // Create an express app

// Use CORS middleware
// This middleware allows Cross-Origin Resource Sharing, which is necessary for making requests from different origins
app.use(cors());

// Your API routes go here
// Add your API routes here, for example:
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'Hello World!' });
// });

const port = process.env.PORT || 3000; // Set the port number, use the environment variable if available, otherwise use 3000
app.listen(port, () => {
 console.log(`Server is running on port ${port}`); // Log a message to the console when the server starts
});
// Your API routes go here
app.get('/', (req, res) => {
    res.send('Hello, this is your Express app!');
  });
