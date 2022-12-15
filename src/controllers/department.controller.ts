import { NextFunction, Request, Response } from 'express';
import { Department } from '@interfaces/department.interface';
import DepartmentService from '@services/department.service';

class DepartmentController {
    public departmentService = new DepartmentService();

    public getDepartments = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllDepartmentsData: Department[] = await this.departmentService.findAllDepartments();

            res.status(200).json({ data: findAllDepartmentsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const departmentId: string = req.params.id;
            const findOneDepartmentData: Department = await this.departmentService.findDepartmentById(departmentId);

            res.status(200).json({ data: findOneDepartmentData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createDepartment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const departmentData: Department = req.body;
            const createDepartmentData: Department = await this.departmentService.createDepartment(departmentData);

            res.status(201).json({ data: createDepartmentData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const departmentId: string = req.params.id;
            const departmentData: Department = req.body;
            const updateDepartmentData: Department = await this.departmentService.updateDepartment(departmentId, departmentData);

            res.status(200).json({ data: updateDepartmentData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const departmentId: string = req.params.id;
            const deleteDepartmentData: Department = await this.departmentService.deleteDepartment(departmentId);

            res.status(200).json({ data: deleteDepartmentData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default DepartmentController;
