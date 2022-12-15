import { HttpException } from '@exceptions/HttpException';
import { Department } from '@interfaces/department.interface';
import departmentModel from '@models/department.model';
import { isEmpty } from '@utils/util';

class DepartmentService {
    public departments = departmentModel;

    public async findAllDepartments(): Promise<Department[]> {
        const departments: Department[] = await this.departments.find();
        return departments;
    }

    public async findDepartmentById(departmentId: string): Promise<Department> {
        if (isEmpty(departmentId)) throw new HttpException(400, 'DepartmentId is empty');

        const findDepartment: Department = await this.departments.findOne({ _id: departmentId });
        if (!findDepartment) throw new HttpException(409, 'Department doesn\'t exist');

        return findDepartment;
    }

    public async createDepartment(departmentData: Department): Promise<Department> {
        if (isEmpty(departmentData)) throw new HttpException(400, 'departmentData is empty');

        const createDepartmentData: Department = await this.departments.create({ ...departmentData });
        return createDepartmentData;
    }

    public async updateDepartment(departmentId: string, departmentData: Department): Promise<Department> {
        if (isEmpty(departmentData)) throw new HttpException(400, 'departmentData is empty');

        const updateDepartmentById: Department = await this.departments.findByIdAndUpdate(departmentId, { ...departmentData });
        if (!updateDepartmentById) throw new HttpException(409, 'Department doesn\'t exist');

        return updateDepartmentById;
    }

    public async deleteDepartment(departmentId: string): Promise<Department> {
        const deleteDepartmentById: Department = await this.departments.findByIdAndDelete(departmentId);
        if (!deleteDepartmentById) throw new HttpException(409, 'Department doesn\'t exist');

        return deleteDepartmentById;
    }
}

export default DepartmentService;
