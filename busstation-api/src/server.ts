import App from '@/app';
import IndexRoute from '@routes/index.route';
import BusRoute from '@routes/bus.route';
import DriverRoute from '@routes/driver.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new BusRoute(),
    new DriverRoute()
]);

app.listen();
