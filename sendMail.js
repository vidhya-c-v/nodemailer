const nodemailer=require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD ,
  },
});

  const mailOptions={

    from: {
        name:"vidhya",
        address:process.env.USER
    },
    to: ["vidhyacv14@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    html: `
 
        <div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px; font-family: Arial, sans-serif;">
            <h2 style="color: #333;">Welcome to our newsletter!</h2>
            <p style="color: #666;">This is a box-like container with a background color.</p>
            <p style="color: #666;">You can add more content here, such as:</p>
            <ul style="color: #666;">
                <li>Information about your latest products or services</li>
                <li>Updates on company news or events</li>
                <li>Special offers or promotions</li>
            </ul>
            <p style="color: #666;">Feel free to customize this message as needed.</p>
        </div>
    `,
    

    
    }
   
    const sendMail=async(transporter,mailOptions)=>{
        try{
            await transporter.sendMail(mailOptions)
            console.log("email send successfully")
        }
        catch(error){
            console.error(error);

        } 
    }
sendMail(transporter,mailOptions);
    





