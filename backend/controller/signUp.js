import User from "../mdule/user.module.js";
import bcrypt from "bcryptjs";
export const Signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password,10)
        // Create and save new user
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });

        await createUser.save();

        res.status(201).json({ message: "User created successfully", user:{
            _id: createUser._id,
            fullname: createUser.fullname,
            email: createUser.email,
        } });

    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const Login  = async (req,res)=>{
    try {
        const {email, password} = req.body;
        // Check if user exists
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid Password or Email"});
        } else {
           res.status(200).json({
            message: "Login Successfully",
            user:{
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
           });
        }
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};