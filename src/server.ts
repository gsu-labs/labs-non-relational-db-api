import App from '@/app';
import IndexRoute from '@routes/index.route';
import BookRoute from '@routes/book.route';
import CheckRoute from '@routes/check.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new BookRoute(),
    new CheckRoute()
]);

app.listen();
