import { Router } from 'express';
import { getServices, createServicePost } from '../controllers/serviceController.js';

const serviceRouter = Router();

serviceRouter.get("/", getServices);
serviceRouter.post("/new", createServicePost);

export default serviceRouter;

