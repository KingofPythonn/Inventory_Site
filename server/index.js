import express from 'express';
import cors from 'cors';
import connectDB from './db/conection.js';
import router from './routes/auth.js'; 



const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',router)

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log("server is running in 3000")
}


)