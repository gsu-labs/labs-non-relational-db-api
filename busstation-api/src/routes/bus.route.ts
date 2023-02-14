import { Router } from 'express';
import BusController from '@controllers/bus.controller';
import { Routes } from '@interfaces/routes.interface';

class BusRoute implements Routes {
    public path = '/bus';
    public router = Router();
    public busController = new BusController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.busController.getBuses);
        this.router.get(`${this.path}/:id`, this.busController.getBusById);
        this.router.post(`${this.path}`, this.busController.createBus);
        this.router.put(`${this.path}/:id`, this.busController.updateBus);
        this.router.delete(`${this.path}/:id`, this.busController.deleteBus);
        this.router.get(`${this.path}/mileage/:max`, this.busController.getBusesByMileage);
        this.router.get(`${this.path}/search/:destination`, this.busController.getBusesBySearch);
        this.router.get(`${this.path}/sort/year`, this.busController.getBusesSortByYear);
    }
}

export default BusRoute;
