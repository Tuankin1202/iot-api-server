const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/save-light-data', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).send({ message: 'Data received successfully' });
});

app.get('/', (req, res) => {
  res.send('Node.js server is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
