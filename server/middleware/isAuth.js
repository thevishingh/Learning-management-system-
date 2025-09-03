import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        // No token found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed: No token provided"
            });
        }

        // Verify token
        let verifiedToken;
        try {
            verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed: Invalid or expired token"
            });
        }

        // If token is valid, attach user info
        req.userID = verifiedToken.userID;
        next();

    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error during authentication",
            error: error.message
        });
    }
};

export default isAuth;
