import { RequestHandler, Request, Response } from 'express';

export const alive: RequestHandler = (req: Request, res: Response) => { 
    return res.status(200).json({
        'alive': true
    });
};