const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Explicitly handle all HTML routes
const htmlRoutes = [
  '/', '/sos', '/reminders', '/caregiver', 
  '/calls', '/checkins', '/tasks', '/social'
];

htmlRoutes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
});

// API routes would go here in a real application

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`ElderCare app running at http://localhost:${port}`);
  console.log('Available routes:');
  htmlRoutes.forEach(route => console.log(`- http://localhost:${port}${route}`));
});
