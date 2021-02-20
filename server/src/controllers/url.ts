import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { generate as generateShortID } from 'shortid'
import { RequestValidationError } from '../utils/errors'
import * as URLService from '../services/url'

export const shorten = async (req: Request, res: Response, next: NextFunction) => {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return next(new RequestValidationError(validationErrors.array()))
    }

    try {
        const { baseURL } = req.body;
        const shortURL = generateShortID();
        
        const find = await URLService.findOneByBaseURL(baseURL);
        if (find) {
            return res.send(find);
        }

        const created = await URLService.create(baseURL, shortURL);
        return res.send(created);
    } catch (error) {
        return next(error);
    }
}

export const redirect = async (req: Request, res: Response, next: NextFunction) => {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return next(new RequestValidationError(validationErrors.array()))
    }

    try {
        const { shortURL } = req.params;
        const redirect = await URLService.findOne(shortURL);
        return res.send(redirect);
    } catch (error) {
        return next(error);
    }
}