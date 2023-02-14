import { Router } from 'express';
import EmployeeController from '@controllers/employee.controller';
import { Routes } from '@interfaces/routes.interface';

class EmployeeRoute implements Routes {
    public path = '/employee';
    public router = Router();
    public employeeController = new EmployeeController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.employeeController.getEmployees);
        this.router.get(`${this.path}/:id`, this.employeeController.getEmployeeById);
        this.router.post(`${this.path}`, this.employeeController.createEmployee);
        this.router.put(`${this.path}/:id`, this.employeeController.updateEmployee);
        this.router.delete(`${this.path}/:id`, this.employeeController.deleteEmployee);
        this.router.get(`${this.path}/salary/:max`, this.employeeController.getEmployeesBySalary);
        this.router.get(`${this.path}/search/:name`, this.employeeController.getEmployeesBySearch);
        this.router.get(`${this.path}/sort/experience`, this.employeeController.getEmployeesSortByExperience);
    }
}

export default EmployeeRoute;
