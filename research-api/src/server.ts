import App from '@/app';
import IndexRoute from '@routes/index.route';
import EmployeeRoute from '@routes/employee.route';
import DepartmentRoute from '@routes/department.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new EmployeeRoute(),
    new DepartmentRoute()
]);

app.listen();
