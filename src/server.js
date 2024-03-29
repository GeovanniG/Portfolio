require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const compression = require('compression');
const helmet = require('helmet');

const buildDirectoryPath = path.join(__dirname, '../build');
const staticDirectoryPath = path.join(__dirname, '../build', 'static');
const indexDirectoryPath = path.join(__dirname, '../build', 'index.html');
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(helmet());

app.post('/api/email', async (req, res) => {
    const emailTo = req.body.emailTo;
    const subject = req.body.subject;
    const text = req.body.text;
    
    const response = await sendEmail(emailTo, subject, text);
    res.json({ response });
})

const sendEmail = (emailTo, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.REACT_APP_EMAIL,
          pass: process.env.REACT_APP_PASS
        }
    });
    const mailOptions = {
        from: emailTo,
        to: process.env.REACT_APP_EMAIL,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (err, info) => {
        // if (err) return console.log(err);
        // console.log(info.envelope);
        // console.log(info.messageId);
    });
}

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(buildDirectoryPath, {
        setHeaders: (res, path) => {
            if (path.includes(indexDirectoryPath)) {
                res.setHeader('Cache-Control', 'no-cache');
            } else if (path.includes(staticDirectoryPath)) {
                res.setHeader('Cache-control', 'max-age=31536000');
            }
        }
    }));
} else {
    app.use(express.static(buildDirectoryPath));
}

// Handle React routing, return all requests to React app
app.get('/*', (req, res) => {
    res.sendFile(indexDirectoryPath);
});

// app.listen(port, () => console.log(`${port} is listening`));
app.listen(port);