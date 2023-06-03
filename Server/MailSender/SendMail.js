import transporter from "./Transporter.js";
const sendMail = (data) =>{
    const options = {
        from :"mailsendfree@gmail.com",
        to:"gautamk1336@gmail.com",
        subject:data.subject,
        html:`<div>
        <div>
        <p>${data.username}</p>
        <p>${data.mobileNo}</p>
        <p>${data.mail}</p>
        </div>
        <div style="margin-top=50px;">${data.message}</div>
            
        </div>`
    }
    transporter.sendMail(options);
    console.log("Sent");
}

export default sendMail;