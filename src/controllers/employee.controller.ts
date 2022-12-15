import { NextFunction, Request, Response } from 'express';
import { Employee } from '@interfaces/employee.interface';
import EmployeeService from '@services/employee.service';

class EmployeeController {
    public employeeService = new EmployeeService();

    public getEmployees = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllEmployeesData: Employee[] = await this.employeeService.findAllEmployees();

            res.status(200).json({ data: findAllEmployeesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employeeId: string = req.params.id;
            const findOneEmployeeData: Employee = await this.employeeService.findEmployeeById(employeeId);

            res.status(200).json({ data: findOneEmployeeData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createEmployee = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employeeData: Employee = req.body;
            const createEmployeeData: Employee = await this.employeeService.createEmployee(employeeData);

            res.status(201).json({ data: createEmployeeData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employeeId: string = req.params.id;
            const employeeData: Employee = req.body;
            const updateEmployeeData: Employee = await this.employeeService.updateEmployee(employeeId, employeeData);

            res.status(200).json({ data: updateEmployeeData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const employeeId: string = req.params.id;
            const deleteEmployeeData: Employee = await this.employeeService.deleteEmployee(employeeId);

            res.status(200).json({ data: deleteEmployeeData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getEmployeesBySalary = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const maxSalary: number = +req.params.max;
            const findEmployeesData: Employee[] = await this.employeeService.findEmployeesBySalary(maxSalary);

            res.status(200).json({ data: findEmployeesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getEmployeesBySearch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const name: string = req.params.name;
            const findEmployeesData: Employee[] = await this.employeeService.search(name);

            res.status(200).json({ data: findEmployeesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getEmployeesSortByExperience = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllEmployeesData: Employee[] = await this.employeeService.findAllEmployeesSortByExperience();

            res.status(200).json({ data: findAllEmployeesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default EmployeeController;
