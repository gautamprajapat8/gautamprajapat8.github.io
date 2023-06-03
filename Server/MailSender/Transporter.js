import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    service:'gmail',
    auth:{
        user:"mailsendfree@gmail.com",
        pass:"jwubcoglcdgdkfpa",
    }
});

export default transporter;