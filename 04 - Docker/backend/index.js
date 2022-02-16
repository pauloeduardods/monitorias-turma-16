const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/user', async (_req, res) => {
  const fileContent = await fs.readFile('name.json', 'utf8')
  const { name } = JSON.parse(fileContent);
  if (!name) return res.status(404).send({ message: 'User not found' });
  res.status(200).json({
    name
  });
});

app.post('/user', async (req, res) => {
  const { name } = req.body;
  if (!name) res.status(400).send({ message: 'Name is required' });
  await fs.writeFile('name.json', JSON.stringify({ name }, null, 2));
  res.status(201).json({
    name
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});