import { Router } from 'express';
import PassengerController from '@controllers/passenger.controller';
import { Routes } from '@interfaces/routes.interface';

class PassengerRoute implements Routes {
    public path = '/passenger';
    public router = Router();
    public passengerController = new PassengerController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.passengerController.getPassengers);
        this.router.get(`${this.path}/:id`, this.passengerController.getPassengerById);
        this.router.post(`${this.path}`, this.passengerController.createPassenger);
        this.router.put(`${this.path}/:id`, this.passengerController.updatePassenger);
        this.router.delete(`${this.path}/:id`, this.passengerController.deletePassenger);
    }
}

export default PassengerRoute;
