import { body, param } from 'express-validator'

export const validateShorten = [
    body('baseURL')
        .not()
        .isEmpty()
        .withMessage('Base URL is required')
        .isURL()
        .withMessage('Invalid URL')
]

export const validateRedirect = [
    param('shortURL')
        .not()
        .isEmpty()
        .withMessage('Invalid URL')
]