import { Router } from 'express';
import TrainController from '@controllers/train.controller';
import { Routes } from '@interfaces/routes.interface';

class TrainRoute implements Routes {
    public path = '/train';
    public router = Router();
    public trainController = new TrainController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.trainController.getTrains);
        this.router.get(`${this.path}/:id`, this.trainController.getTrainById);
        this.router.post(`${this.path}`, this.trainController.createTrain);
        this.router.put(`${this.path}/:id`, this.trainController.updateTrain);
        this.router.delete(`${this.path}/:id`, this.trainController.deleteTrain);
        this.router.get(`${this.path}/search/:str`, this.trainController.getTrainsBySearch);
    }
}

export default TrainRoute;
