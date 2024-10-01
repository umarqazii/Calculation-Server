import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import calculationRoutes from "./Routes/calculationRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Realz Calculation server is up and running')
})

app.use('/calculation', calculationRoutes);


app.listen(4000, () => {
  console.log('Server Calculation server is running on port 4000');
});
