import { Request, Response, NextFunction, Router } from "express";
import ForbiddenError from "../models/errors/forbiden.error.model";


const authorizationRoute = Router();

authorizationRoute.post('/token', (req: Request, res: Response, next:NextFunction) => {   
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError("Credenciais não informadas");
        }
    } catch (error) {
        next(error);
    }
    
});

export default authorizationRoute;