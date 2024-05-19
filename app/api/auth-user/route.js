import User from "@/models/Schema";
import { connectDB } from "@/utils/DB";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async(req) => {
   try {
     // recieve the data
     const {email, password} = await req.json();

     // then connect to database
     await connectDB();
 
     // find the user
     const findUser = await User.findOne({email});
 
     // findUser validation
     if (findUser) {
         // compare to password
         const authPass = await bcrypt.compare(password, findUser.password);

         if (authPass) {
            const userData = {
              username: findUser.username
            }
             return new NextResponse(userData.username, {status: 200})
         }
         else{
          return new NextResponse("Invalid Email and Password", {status :401})
         }
     }
     else {return new NextResponse("User not Found", {status: 404})}
   } catch (error) {
    return new NextResponse("Internal Server Error", {status: 500})
   }
}