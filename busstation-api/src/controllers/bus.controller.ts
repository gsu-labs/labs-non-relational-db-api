import { NextFunction, Request, Response } from 'express';
import { Bus } from '@interfaces/bus.interface';
import BusService from '@services/bus.service';

class BusController {
    public busService = new BusService();

    public getBuses = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBusesData: Bus[] = await this.busService.findAllBuses();

            res.status(200).json({ data: findAllBusesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getBusById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const busId: string = req.params.id;
            const findOneBusData: Bus = await this.busService.findBusById(busId);

            res.status(200).json({ data: findOneBusData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createBus = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const busData: Bus = req.body;
            const createBusData: Bus = await this.busService.createBus(busData);

            res.status(201).json({ data: createBusData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateBus = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const busId: string = req.params.id;
            const busData: Bus = req.body;
            const updateBusData: Bus = await this.busService.updateBus(busId, busData);

            res.status(200).json({ data: updateBusData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteBus = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const busId: string = req.params.id;
            const deleteBusData: Bus = await this.busService.deleteBus(busId);

            res.status(200).json({ data: deleteBusData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getBusesByMileage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const maxMileage: number = +req.params.max;
            const findBusesData: Bus[] = await this.busService.findBusesByMileage(maxMileage);

            res.status(200).json({ data: findBusesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getBusesBySearch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const destination: string = req.params.destination;
            const findBusesData: Bus[] = await this.busService.search(destination);

            res.status(200).json({ data: findBusesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getBusesSortByYear = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBusesData: Bus[] = await this.busService.findAllBusesSortByYear();

            res.status(200).json({ data: findAllBusesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default BusController;
