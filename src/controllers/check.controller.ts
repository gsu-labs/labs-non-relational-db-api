import { NextFunction, Request, Response } from 'express';
import { Check } from '@interfaces/check.interface';
import CheckService from '@services/check.service';

class CheckController {
    public checkService = new CheckService();

    public getChecks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllChecksData: Check[] = await this.checkService.findAllChecks();

            res.status(200).json({ data: findAllChecksData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getCheckById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const checkId: string = req.params.id;
            const findOneCheckData: Check = await this.checkService.findCheckById(checkId);

            res.status(200).json({ data: findOneCheckData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createCheck = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const checkData: Check = req.body;
            const createCheckData: Check = await this.checkService.createCheck(checkData);

            res.status(201).json({ data: createCheckData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateCheck = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const checkId: string = req.params.id;
            const checkData: Check = req.body;
            const updateCheckData: Check = await this.checkService.updateCheck(checkId, checkData);

            res.status(200).json({ data: updateCheckData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteCheck = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const checkId: string = req.params.id;
            const deleteCheckData: Check = await this.checkService.deleteCheck(checkId);

            res.status(200).json({ data: deleteCheckData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default CheckController;
