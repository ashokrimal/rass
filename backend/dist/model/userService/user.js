import { Role, User } from "./userSchema.js";
export const createUserService = async (user) => {
    try {
        const createUser = new User(user);
        const createdUser = await createUser.save();
        return createdUser;
    }
    catch (error) {
        console.log(error);
    }
};
export const getUserByIdService = async (id) => {
    try {
        const user = await User.findById({
            _id: id
        }).lean().exec();
        return user;
    }
    catch (error) {
        console.log("error while getting user by id", error);
    }
};
//# sourceMappingURL=user.js.map