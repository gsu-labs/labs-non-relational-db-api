import App from '@/app';
import IndexRoute from '@routes/index.route';
import TrainRoute from '@routes/train.route';
import PassengerRoute from '@routes/passenger.route';
import CarriageRoute from '@routes/carriage.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new TrainRoute(),
    new PassengerRoute(),
    new CarriageRoute()
]);

app.listen();
