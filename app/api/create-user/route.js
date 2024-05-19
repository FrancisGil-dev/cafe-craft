import { connectDB } from "@/utils/DB";
import User from "@/models/Schema";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
export const POST = async(req) => {
    // get the request
    const {username, email, password} = await req.json();

    // then connect to database
    await connectDB();

    // find the user in Database
    const findUser = await User.findOne({email});
    
    // authenticate
    if (findUser) return new NextResponse("User Already Exists", {status: 409});
    
    // hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    
    try {
        // then create new User
        const newUser = new User({
            username, email, password: hashedPass,

        })

        // save the user
        await newUser.save();

        // reponse 200
        return new NextResponse("Successfully Registered", {status: 200})
    } catch (error) {
        return new NextResponse("Internal Server Error", {status: 500})
    }
}