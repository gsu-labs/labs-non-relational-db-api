import { Router } from 'express';
import CheckController from '@controllers/check.controller';
import { Routes } from '@interfaces/routes.interface';

class CheckRoute implements Routes {
    public path = '/check';
    public router = Router();
    public checkController = new CheckController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.checkController.getChecks);
        this.router.get(`${this.path}/:id`, this.checkController.getCheckById);
        this.router.post(`${this.path}`, this.checkController.createCheck);
        this.router.put(`${this.path}/:id`, this.checkController.updateCheck);
        this.router.delete(`${this.path}/:id`, this.checkController.deleteCheck);
    }
}

export default CheckRoute;
