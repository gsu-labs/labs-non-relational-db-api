import { Router } from 'express';
import DriverController from '@controllers/driver.controller';
import { Routes } from '@interfaces/routes.interface';

class DriverRoute implements Routes {
    public path = '/driver';
    public router = Router();
    public driverController = new DriverController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.driverController.getDrivers);
        this.router.get(`${this.path}/:id`, this.driverController.getDriverById);
        this.router.post(`${this.path}`, this.driverController.createDriver);
        this.router.put(`${this.path}/:id`, this.driverController.updateDriver);
        this.router.delete(`${this.path}/:id`, this.driverController.deleteDriver);
    }
}

export default DriverRoute;
