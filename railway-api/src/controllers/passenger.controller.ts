import { NextFunction, Request, Response } from 'express';
import { Passenger } from '@interfaces/passenger.interface';
import PassengerService from '@services/passenger.service';

class PassengerController {
    public passengerService = new PassengerService();

    public getPassengers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllPassengersData: Passenger[] = await this.passengerService.findAllPassengers();

            res.status(200).json({ data: findAllPassengersData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getPassengerById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const passengerId: string = req.params.id;
            const findOnePassengerData: Passenger = await this.passengerService.findPassengerById(passengerId);

            res.status(200).json({ data: findOnePassengerData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createPassenger = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const passengerData: Passenger = req.body;
            const createPassengerData: Passenger = await this.passengerService.createPassenger(passengerData);

            res.status(201).json({ data: createPassengerData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updatePassenger = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const passengerId: string = req.params.id;
            const passengerData: Passenger = req.body;
            const updatePassengerData: Passenger = await this.passengerService.updatePassenger(passengerId, passengerData);

            res.status(200).json({ data: updatePassengerData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deletePassenger = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const passengerId: string = req.params.id;
            const deletePassengerData: Passenger = await this.passengerService.deletePassenger(passengerId);

            res.status(200).json({ data: deletePassengerData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default PassengerController;
