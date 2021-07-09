import path from 'path';
import express from 'express';

const app = express();
const port = 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(dist));

app.listen(8080, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
