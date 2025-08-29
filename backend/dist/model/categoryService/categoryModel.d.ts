import mongoose from "mongoose";
export declare const Category: mongoose.Model<{
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}, {}, mongoose.DefaultSchemaOptions> & {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=categoryModel.d.ts.map