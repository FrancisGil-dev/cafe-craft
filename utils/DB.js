import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        if (mongoose.connections[0].readyState) return 
        
        // connect to db
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
    }
}