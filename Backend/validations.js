import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Email Error').isEmail(),
    body('password', 'password error').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Email Error').isEmail(),
    body('password', 'password error').isLength({ min: 5 }),
    body('fullName', 'Name error').isLength({ min: 3 }),
    body('avatarUrl', 'Avatar pozor').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Gde zagolovok').isLength({ min: 3}).isString(),
    body('text', 'Gde text').isLength({ min: 10 }).isString(),
    body('tags', 'Tags error format(massiv mb)').optional().isArray(),
    body('imageUrl', 'Link is bad').optional().isString(),
];