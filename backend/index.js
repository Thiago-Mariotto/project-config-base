const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.get('/', async (_req, res) => {
  try {
    const [instructors] = await connection.execute(
      'SELECT * FROM technology.language',
    );

    return res.status(200).json(instructors);
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.listen(PORT);
