const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple health check endpoint (crucial for Kubernetes liveness/readiness probes!)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is running smoothly!' });
});

// A sample data endpoint
app.get('/api/info', (req, res) => {
  res.json({
    course: 'Helm for Beginners',
    module: 'Deploying Node.js APIs',
    kubernetesEngine: 'AKS'
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
