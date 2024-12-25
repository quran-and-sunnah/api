import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('quran-and-sunnah');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});