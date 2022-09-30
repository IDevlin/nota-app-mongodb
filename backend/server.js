import express from 'express';
import 'dotenv/config';
import methodOverride from 'method-override';
import session from 'express-session';
//Init
const app = express();
const port = process.env.PORT;

//Settings

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
  session({ secret: 'mysecretapp', resave: true, saveUninitialized: true })
);
//Global Variables

//Routes


//Static Files

//Server is listening
app.listen(port, () => console.log(`Connection at port: ${port}`));
