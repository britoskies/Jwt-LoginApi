import jwt from 'jsonwebtoken';
import { Handler } from 'express';
// import { database as db } from '../db'

interface iPayload {
    id: string;
    iat: number;
    exp: number;
}

export const TokenValidation: Handler = (req, res, next) => {
    const token: string = req.header('auth-token') || '';
    const secretToken: string = process.env.SECRET_TOKEN || 'secret';

    if (!token) {
        res.status(400)
        .json({
            message: "Session expired",
            hasSucceeded: false
        });
    }

    const payload = jwt.verify(token,secretToken) as iPayload;
    console.log(payload);

    next();
} 