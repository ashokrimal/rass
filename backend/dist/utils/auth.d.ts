import jwt from "jsonwebtoken";
export declare const hashPassword: (password: string) => Promise<string | undefined>;
export declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean | undefined>;
export declare const generateToken: (payload: any) => Promise<string | undefined>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload | undefined>;
//# sourceMappingURL=auth.d.ts.map