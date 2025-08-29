import mongoose from "mongoose";
export var Role;
(function (Role) {
    Role["customer"] = "customer";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    role: {
        type: String,
        default: "customer",
        enum: Object.values(Role)
    }
});
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=userSchema.js.map