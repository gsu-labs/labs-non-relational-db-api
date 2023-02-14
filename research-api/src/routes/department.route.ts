import { Router } from 'express';
import DepartmentController from '@controllers/department.controller';
import { Routes } from '@interfaces/routes.interface';

class DepartmentRoute implements Routes {
    public path = '/department';
    public router = Router();
    public departmentController = new DepartmentController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.departmentController.getDepartments);
        this.router.get(`${this.path}/:id`, this.departmentController.getDepartmentById);
        this.router.post(`${this.path}`, this.departmentController.createDepartment);
        this.router.put(`${this.path}/:id`, this.departmentController.updateDepartment);
        this.router.delete(`${this.path}/:id`, this.departmentController.deleteDepartment);
    }
}

export default DepartmentRoute;
