import express from 'express'

const userRouter = express.Router()

userRouter.get('/signin', (req, res)=> {
  res.send('Ingresando al la app')
})

userRouter.get('/signup', (req, res)=> {
    res.send('Formulario de autenticacion')
})
export default userRouter