import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Email Error').isEmail(),
    body('password', 'password error').isLength({ min: 5 }),
    body('fullName', 'Name error').isLength({ min: 3 }),
    body('avatarUrl', 'Avatar pozor').optional().isURL(),
];