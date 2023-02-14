import { NextFunction, Request, Response } from 'express';
import { Driver } from '@interfaces/driver.interface';
import DriverService from '@services/driver.service';

class DriverController {
    public driverService = new DriverService();

    public getDrivers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllDriversData: Driver[] = await this.driverService.findAllDrivers();

            res.status(200).json({ data: findAllDriversData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getDriverById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId: string = req.params.id;
            const findOneDriverData: Driver = await this.driverService.findDriverById(driverId);

            res.status(200).json({ data: findOneDriverData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverData: Driver = req.body;
            const createDriverData: Driver = await this.driverService.createDriver(driverData);

            res.status(201).json({ data: createDriverData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId: string = req.params.id;
            const driverData: Driver = req.body;
            const updateDriverData: Driver = await this.driverService.updateDriver(driverId, driverData);

            res.status(200).json({ data: updateDriverData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId: string = req.params.id;
            const deleteDriverData: Driver = await this.driverService.deleteDriver(driverId);

            res.status(200).json({ data: deleteDriverData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default DriverController;
