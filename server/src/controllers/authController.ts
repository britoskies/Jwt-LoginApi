import { Handler } from "express";
import { database as db } from "../db";
import jwt from 'jsonwebtoken';  
import { encryptPw } from "../models/usersModel";

export const login: Handler = async (req, res) => {
    try {
        const { username, pw } = req.body;
        const secretToken: string = process.env.SECRET_TOKEN || 'secret';
        const expiresIn = { expiresIn: 60*60 };

        if (username === db.username && pw === db.password){
            const token: string = jwt.sign({ id: db.id }, secretToken, expiresIn);
            db.password = await encryptPw(db.password);
            
            return ( 
                res.header('auth-token', token).
                json({ 
                    message: 'Succesfully signed in',
                    hasSucceeded: true
                })
            );
        }
        
        res.status(400).
        json({ 
            message: 'Wrong username or password',
            hasSucceeded: false
        });

    } catch (error) {
        console.log(error);
    }
}

// Just to remove "Cannot GET" error

export const getApi: Handler = (req,res) => {
    res.json({ 
        message: "You were succesfully signed in our API",
        hasSucceeded: true
    });
}