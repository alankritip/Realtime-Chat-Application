import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3080;

app.use(cors());                       // enable CORS
app.use(express.json());               // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse form bodies

app.get('/api', (req, res) => {
  console.log(req.query);              // avoid logging res (very large)
  res.json({ message: 'OK' });         // send a response
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
