import { Router } from 'express';
import InvoiceController from '@controllers/invoice.controller';
import { Routes } from '@interfaces/routes.interface';

class InvoiceRoute implements Routes {
    public path = '/invoice';
    public router = Router();
    public invoiceController = new InvoiceController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.invoiceController.getInvoices);
        this.router.get(`${this.path}/:id`, this.invoiceController.getInvoiceById);
        this.router.post(`${this.path}`, this.invoiceController.createInvoice);
        this.router.put(`${this.path}/:id`, this.invoiceController.updateInvoice);
        this.router.delete(`${this.path}/:id`, this.invoiceController.deleteInvoice);
    }
}

export default InvoiceRoute;
