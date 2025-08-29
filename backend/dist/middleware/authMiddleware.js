import { verifyToken } from "../utils/auth.js";
import { getCategoryById } from "../model/categoryService/category.js";
import { getUserByIdService } from "../model/userService/user.js";
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }
        const decodedToken = await verifyToken(token);
        if (!decodedToken) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        if (typeof decodedToken === "string" || !("_id" in decodedToken)) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        const user = await getUserByIdService(decodedToken._id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        console.log("user verified successfully");
        next();
    }
    catch (error) {
        return res.status(500).json({ "internal server error in auth middlewre": error });
    }
};
//# sourceMappingURL=authMiddleware.js.map