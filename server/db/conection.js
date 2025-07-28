import mongoose, { Mongoose } from "mongoose";

const connectDB = async (params) => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection created successfully")
    }
    catch(error){
        console.error("connection failed",error.message);
        process.exit(1)
    };
    
}
export default connectDB;