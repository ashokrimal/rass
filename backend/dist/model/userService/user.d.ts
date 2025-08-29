import { Role } from "./userSchema.js";
type userType = {
    name: string;
    email: string;
    password: string;
    address: string;
    role: Role;
};
export declare const createUserService: (user: userType) => Promise<(import("mongoose").Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | undefined>;
export declare const getUserByIdService: (id: string) => Promise<(import("mongoose").FlattenMaps<{
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null | undefined>;
export {};
//# sourceMappingURL=user.d.ts.map