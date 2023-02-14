import { NextFunction, Request, Response } from 'express';
import { Train } from '@interfaces/train.interface';
import TrainService from '@services/train.service';

class TrainController {
    public trainService = new TrainService();

    public getTrains = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTrainsData: Train[] = await this.trainService.findAllTrains();

            res.status(200).json({ data: findAllTrainsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getTrainById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trainId: string = req.params.id;
            const findOneTrainData: Train = await this.trainService.findTrainById(trainId);

            res.status(200).json({ data: findOneTrainData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createTrain = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trainData: Train = req.body;
            const createTrainData: Train = await this.trainService.createTrain(trainData);

            res.status(201).json({ data: createTrainData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateTrain = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trainId: string = req.params.id;
            const trainData: Train = req.body;
            const updateTrainData: Train = await this.trainService.updateTrain(trainId, trainData);

            res.status(200).json({ data: updateTrainData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteTrain = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const trainId: string = req.params.id;
            const deleteTrainData: Train = await this.trainService.deleteTrain(trainId);

            res.status(200).json({ data: deleteTrainData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getTrainsBySearch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const str: string = req.params.str;
            const findTrainsData: Train[] = await this.trainService.search(str);

            res.status(200).json({ data: findTrainsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default TrainController;
