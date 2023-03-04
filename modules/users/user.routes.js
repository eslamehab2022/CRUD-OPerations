import { Router } from 'express';
import * as userController from '../users/controller/user.controller.js';


const userRouter = Router();

userRouter.get('/', userController.allUsers);
userRouter.post('/', userController.signUp);
userRouter.post('/login', userController.login);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.usersDelete);



export default userRouter;


















