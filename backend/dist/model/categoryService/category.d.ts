export declare const addCategory: (input: {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
}) => Promise<(import("mongoose").Document<unknown, {}, {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | undefined>;
export declare const getAllCategories: () => Promise<(import("mongoose").FlattenMaps<{
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
})[] | undefined>;
export declare const getCategoryById: (id: string) => Promise<(import("mongoose").FlattenMaps<{
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null | undefined>;
export declare const getCategoryByName: (name: string) => Promise<(import("mongoose").Document<unknown, {}, {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    categoryName: string;
    categoryDescription: string;
    imageUrl: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null | undefined>;
export declare const deleteCategoryById: (id: string) => Promise<import("mongodb").DeleteResult | undefined>;
export declare const updateCategoryById: (id: string, input: {
    categoryName: string;
    categoryDescription: string;
    imageUrl?: string;
}) => Promise<import("mongoose").UpdateWriteOpResult>;
//# sourceMappingURL=category.d.ts.map