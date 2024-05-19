import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// create transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
})

// email validation format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const POST = async(req) => {
    try {
        // validate request method
        if (req.method !== 'POST') return new NextResponse("Method Not Allowed", { status:405 });

        // parse and validate the data
        const {name, email, message} = await req.json();

        // validate the request
        if (!name || !email || !message) return new NextResponse("Invalid Input", { status: 400 });

        // validate email format
        if (!isValidEmail(email)) return new NextResponse("Invaid Email Format", { status: 400});
        
        // send the email
        await transporter.sendMail({
            from: `Welcome ${process.env.EMAIL_USER} from Cafecraft`,
            to: email,
            subject: `Message from ${name}`,
            text: message,
        })
        // return 200 if the email sent successfully
        return new NextResponse("Message Sent Successfully!", { status: 200 })
    } catch (error) {
        // log the error
        console.log('Error sending email:', error.message);
        // Return 500 for server errors
        return new NextResponse("Failed to Send Message", { status: 500 });
    }
}