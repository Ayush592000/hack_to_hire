const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors middleware
const app = express();

dotenv.config();

const PORT = process.env.DB_port;

app.use(cors()); // Use the cors middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Your routes and other middleware
app.use(express.json());
const ClassType = require('./src/routes/classTypeRoutes')
app.use('/api', ClassType
);

// Example route to test CORS
app.get('/', (req, res) => {
  ClassType
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Your database running on ${PORT} no.`);
});
