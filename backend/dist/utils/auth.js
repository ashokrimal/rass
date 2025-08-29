import bcrypt from "bcrypt";
import { hash } from "crypto";
import jwt from "jsonwebtoken";
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    catch (error) {
        console.log(error);
    }
};
export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    }
    catch (error) {
        console.log(error);
    }
};
export const generateToken = async (payload) => {
    try {
        const token = await jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        return token;
    }
    catch (error) {
        console.log(error);
    }
};
export const verifyToken = async (token) => {
    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        return decoded;
    }
    catch (error) {
        console.log("error while verifying token", token);
    }
};
//# sourceMappingURL=auth.js.map