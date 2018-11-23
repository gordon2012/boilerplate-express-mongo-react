import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));

app.get('/', function(req, res) {
  res.json({ end: 'front' });
});

app.get('/api/:input?', function(req, res) {
  const { input } = req.params;

  res.json({ ...(input ? { input } : {}), end: 'back' });
});

export default app;
