import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import genToken from "../middleware/authToken.js";

// ================== REGISTER ==================
export const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            role,
        });

        // Generate token
        const token = await genToken(newUser._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set true in production (HTTPS)
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                profilePhotoUrl: newUser.profilePhotoUrl,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Signup error",
            error: error.message,
        });
    }
};

// ================== LOGIN ==================
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Generate token
        const token = await genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set true in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePhotoUrl: user.profilePhotoUrl,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Login error",
            error: error.message,
        });
    }
};

// ================== LOGOUT ==================
export const Logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "Logout successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Logout error",
            error: error.message,
        });
    }
};
