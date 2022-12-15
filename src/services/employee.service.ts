import { HttpException } from '@exceptions/HttpException';
import { Employee } from '@interfaces/employee.interface';
import employeeModel from '@models/employee.model';
import { isEmpty } from '@utils/util';

class EmployeeService {
    public employees = employeeModel;

    public async findAllEmployees(): Promise<Employee[]> {
        const employees: Employee[] = await this.employees.find();
        return employees;
    }

    public async findEmployeeById(employeeId: string): Promise<Employee> {
        if (isEmpty(employeeId)) throw new HttpException(400, 'EmployeeId is empty');

        const findEmployee: Employee = await this.employees.findOne({ _id: employeeId });
        if (!findEmployee) throw new HttpException(409, 'Employee doesn\'t exist');

        return findEmployee;
    }

    public async createEmployee(employeeData: Employee): Promise<Employee> {
        if (isEmpty(employeeData)) throw new HttpException(400, 'employeeData is empty');

        const createEmployeeData: Employee = await this.employees.create({ ...employeeData });
        return createEmployeeData;
    }

    public async updateEmployee(employeeId: string, employeeData: Employee): Promise<Employee> {
        if (isEmpty(employeeData)) throw new HttpException(400, 'employeeData is empty');

        const updateEmployeeById: Employee = await this.employees.findByIdAndUpdate(employeeId, { ...employeeData });
        if (!updateEmployeeById) throw new HttpException(409, 'Employee doesn\'t exist');

        return updateEmployeeById;
    }

    public async deleteEmployee(employeeId: string): Promise<Employee> {
        const deleteEmployeeById: Employee = await this.employees.findByIdAndDelete(employeeId);
        if (!deleteEmployeeById) throw new HttpException(409, 'Employee doesn\'t exist');

        return deleteEmployeeById;
    }

    public async findEmployeesBySalary(maxSalary: number): Promise<Employee[]> {
        if (isEmpty(maxSalary)) throw new HttpException(400, 'Employee salary is empty');

        const findEmployees: Employee[] = await this.employees.find({ salary: { $lt: maxSalary } });
        if (!findEmployees) throw new HttpException(409, 'Employees doesn\'t exist');

        return findEmployees;
    }

    public async search(name: string): Promise<Employee[]> {
        if (isEmpty(name)) throw new HttpException(400, 'String is empty');

        const findEmployees: Employee[] = await this.employees.find({ name: { '$regex': name, '$options': 'i' } });
        if (!findEmployees) throw new HttpException(409, 'Employees doesn\'t exist');

        return findEmployees;
    }

    public async findAllEmployeesSortByExperience(): Promise<Employee[]> {
        const employees: Employee[] = await this.employees.find().sort({ experience: 1 });
        return employees;
    }
}

export default EmployeeService;
