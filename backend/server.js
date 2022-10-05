import express from 'express';
import 'dotenv/config';
import methodOverride from 'method-override';
import session from 'express-session';
import indexRouter from './routes/indexRoute.js';
import notesRouter from './routes/notesRoute.js';
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('conected to DB'))
  .catch((err) => console.log(err.message));
//Init
const app = express();
const port = process.env.PORT || 3001;

//Settings

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
  session({ secret: 'mysecretapp', resave: true, saveUninitialized: true })
);
//Global Variables

//Routes
app.use('/index', indexRouter);
app.use('/notes', notesRouter);
app.use('/users', userRouter);

//Static Files

//Server is listening
app.listen(port, () => console.log(`Server at port: ${port}`));
