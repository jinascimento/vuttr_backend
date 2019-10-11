import { Router } from 'express';
import cors from 'cors';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Middlewares
routes.use(cors());

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Users
routes.put('/users', UserController.update);

export default routes;
