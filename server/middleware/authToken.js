import jwt from "jsonwebtoken";

const genToken = (userID) => {
    try {
        const token = jwt.sign(
            { userID },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return token;

    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
};

export default genToken;
