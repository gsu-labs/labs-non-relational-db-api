import { NextFunction, Request, Response } from 'express';
import { Carriage } from '@interfaces/carriage.interface';
import CarriageService from '@services/carriage.service';
import { Train } from '@interfaces/train.interface';

class CarriageController {
    public carriageService = new CarriageService();

    public getCarriages = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllCarriagesData: Carriage[] = await this.carriageService.findAllCarriages();

            res.status(200).json({ data: findAllCarriagesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getCarriageById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const carriageId: string = req.params.id;
            const findOneCarriageData: Carriage = await this.carriageService.findCarriageById(carriageId);

            res.status(200).json({ data: findOneCarriageData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createCarriage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const carriageData: Carriage = req.body;
            const createCarriageData: Carriage = await this.carriageService.createCarriage(carriageData);

            res.status(201).json({ data: createCarriageData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateCarriage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const carriageId: string = req.params.id;
            const carriageData: Carriage = req.body;
            const updateCarriageData: Carriage = await this.carriageService.updateCarriage(carriageId, carriageData);

            res.status(200).json({ data: updateCarriageData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteCarriage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const carriageId: string = req.params.id;
            const deleteCarriageData: Carriage = await this.carriageService.deleteCarriage(carriageId);

            res.status(200).json({ data: deleteCarriageData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getCarriagesByCost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const maxCost: number = +req.params.max;
            const findTrainsData: Train[] = await this.carriageService.findCarriagesByCost(maxCost);

            res.status(200).json({ data: findTrainsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getTrainsSortByLuggageNumber = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTrainsData: Train[] = await this.carriageService.findAllTrainsSortByLuggageNumber();

            res.status(200).json({ data: findAllTrainsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default CarriageController;
