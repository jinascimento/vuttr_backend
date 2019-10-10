import { Router } from 'express';
import cors from 'cors';
import UserController from './app/controllers/UserController';

const routes = new Router();

// Middlewares
routes.use(cors());

// Users
routes.post('/users', UserController.store);


export default routes;
