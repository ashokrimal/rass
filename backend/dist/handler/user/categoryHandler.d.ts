import type { Request, Response } from "express";
export declare const createCategoryHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCategoryHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCategoryHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCategoryHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=categoryHandler.d.ts.map