import express from "express";
import sendMail from "./MailSender/SendMail.js";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
app.use(cors())
app.use(bodyParser.json())
const data={
    mail:"dk251248@gmail.com",
    subject:"Test",
    message:"Test message"
}
app.post("/sendmail", (req, res) => {
    sendMail(req.body)
    // console.log(req.body); 
   res.send("sent message");
})
app.get("/", (req, res)=>{
    res.send("Hello world")
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log("server is runing...");
})