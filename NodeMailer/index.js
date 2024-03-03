require('dotenv').config();
const http = require('http');
const PORT = 8000;
const nodemailer = require('nodemailer');

const ethereal_email = process.env.ETHEREAL_EMAIL;
const ethereal_password = process.env.ETHEREAL_PASSWORD;
const my_email = process.env.MY_EMAIL;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to homepage of nodemailer module');
    }
    else if (req.url == '/mail') {
        const sendMail = async (req, res) => {
            const transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                    user: `${ethereal_email}`,
                    pass: `${ethereal_password}`,
                },
            });

            let info = await transporter.sendMail({
                from: `Karan Verma <${ethereal_email}>`, // sender address
                to: `Tit4Tat, ${my_email}`, // list of receivers
                subject: "Hello", // Subject line
                text: "Hello Karan verma from ethereal email", // plain text body
                html: "Hello Karan verma from ethereal email</b>", // html body
            });
            console.log(info);
            console.log("Message sent: %s", info.messageId);
        }
        
        sendMail();
        res.end('mail sent');

    }
});

server.listen(PORT, () => {
    console.log(`http server is running at ${PORT}`);
});