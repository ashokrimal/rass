import mongoose from "mongoose";
export declare enum Role {
    customer = "customer",
    admin = "admin"
}
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: Role;
    address?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=userSchema.d.ts.map