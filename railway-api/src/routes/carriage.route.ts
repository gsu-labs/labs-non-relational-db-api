import { Router } from 'express';
import CarriageController from '@controllers/carriage.controller';
import { Routes } from '@interfaces/routes.interface';

class CarriageRoute implements Routes {
    public path = '/carriage';
    public router = Router();
    public carriageController = new CarriageController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.carriageController.getCarriages);
        this.router.get(`${this.path}/:id`, this.carriageController.getCarriageById);
        this.router.post(`${this.path}`, this.carriageController.createCarriage);
        this.router.put(`${this.path}/:id`, this.carriageController.updateCarriage);
        this.router.delete(`${this.path}/:id`, this.carriageController.deleteCarriage);
        this.router.get(`${this.path}/cost/:max`, this.carriageController.getCarriagesByCost);
        this.router.get(`${this.path}/sort/number`, this.carriageController.getTrainsSortByLuggageNumber);
    }
}

export default CarriageRoute;
