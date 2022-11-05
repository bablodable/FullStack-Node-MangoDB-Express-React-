import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import * as userController from './controllers/userController.js'

mongoose 
.connect('mongodb+srv://bablodable:NadepezyM753951@cluster0.kv62jxw.mongodb.net/blog?retryWrites=true&w=majority')
.then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', userController.login);

app.post('/auth/register', userController.register);
app.get('/auth/me', checkAuth, userController.checkMe);
app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('server ok');
});