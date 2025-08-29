import type { Request, Response, NextFunction } from "express";
type userType = {
    name: string;
    email: string;
    password: string;
    role: string;
};
declare global {
    namespace Express {
        interface Request {
            user?: userType;
        }
    }
}
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=authMiddleware.d.ts.map