import App from '@/app';
import IndexRoute from '@routes/index.route';
import ProductRoute from '@routes/product.route';
import InvoiceRoute from '@routes/invoice.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([
    new IndexRoute(),
    new ProductRoute(),
    new InvoiceRoute()
]);

app.listen();
