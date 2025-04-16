import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json());

app.listen(process.env.PORT, (err)=> {
    if (!err) {
        console.log("DNS-Server backend running")
    } else {
        console.log("Error while running the application")
        console.log(err)
    }
})