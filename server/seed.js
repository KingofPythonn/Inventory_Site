import bcrypt from "bcrypt";
import User from "./models/User.js"
import connectDB from "./db/conection.js";

const register = async (params) => {
    try {
        connectDB();
        const hashPassword = await bcrypt.hash("admin",10);
        const newUser = new User({
            name:"admin",
            email:"admin@gmail.com",
            password:hashPassword,
            address:"admin address",
            role:"admin"
        })
        await newUser.save();
        console.log("admin user created successfully");
        
    } 
    
    
    catch (error) {
        console.log(error);
        
    }
    
}
register();