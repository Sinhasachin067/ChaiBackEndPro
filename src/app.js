import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.Cors_ORIGIN,
    credentials:true
}))

app.use(express.json[{limit:"16kb"}])//for joson limit
app.use(express.urlencoded({extended:true, limit:"14kb"}))//for url coded
app.use(express.static("public")) //for public forlder
app.use(cookieParser())//for cookies 

export { app };
