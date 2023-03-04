import ProudactRouter from "./modules/proudacts/proudact.routes.js";
import userRouter from "./modules/users/user.routes.js";


const appInait = (app, express) => {
    
    app.use(express.json({}));
    app.use('/users', userRouter);
    app.use('/proudact', ProudactRouter);

};

export default appInait;