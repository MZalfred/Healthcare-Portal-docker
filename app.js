const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Healthcare Portal!');
});

// Define a route for the appointment booking page.
app.get('/book-appointment', (req, res) => {
    res.send('Book an appointment with a doctor');
  });
  
  // ... Other routes and middleware ...
  
  // Start the server as usual.
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

// Add the following code in your app.js file.

// Parse JSON and URL-encoded bodies for form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle form submission.
app.post('/book-appointment', (req, res) => {
  const { name, date, time } = req.body;
  
  // Save appointment details to a database (simulated for now).
  const appointment = {
    name,
    date,
    time,
  };

  // You can use a database library like Mongoose or Sequelize here.

  res.send(`Appointment booked successfully for ${name} on ${date} at ${time}`);
});
