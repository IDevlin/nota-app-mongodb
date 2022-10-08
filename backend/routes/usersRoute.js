import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/UsersSchema.js';

const userRouter = express.Router();

userRouter.get('/signin', (req, res) => {
  res.send('Ingresando al la app');
});

userRouter.post('/signup', async (req, res) => {
  const newUser =  new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  const user = await newUser.save();
  res.send({ message: `Welcome ${user.name} your count have been created`, user });
});
export default userRouter;


