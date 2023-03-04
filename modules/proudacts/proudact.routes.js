import { Router } from "express";
import * as proudactController from '../proudacts/controller/proudact.controller.js'
const ProudactRouter = Router();


ProudactRouter.get('/', proudactController.allProudacts   )
ProudactRouter.post('/',proudactController.addProudact );
ProudactRouter.put('/:id',proudactController.proudactUpdate );
ProudactRouter.delete('/:id',proudactController.proudactDelete );

export default ProudactRouter;
