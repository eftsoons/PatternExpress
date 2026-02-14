import { NextFunction, Request, Response } from "express";
import globalError from "../../constant/globalError";
import decrypto from "../../utils/crypto/decrypto";
interface RequsetAuth extends Request {
  userInfo: NonNullable<Awaited<any>>;
}

export default async (req: Request, _: Response, ___: NextFunction) => {
  const reqMiddleware = req as RequsetAuth;

  const auth = req.headers.authorization;
};

export type { RequsetAuth };
