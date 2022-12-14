import { NextFunction, Request, Response } from 'express';
import { Invoice } from '@interfaces/invoice.interface';
import InvoiceService from '@services/invoice.service';

class InvoiceController {
    public invoiceService = new InvoiceService();

    public getInvoices = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllInvoicesData: Invoice[] = await this.invoiceService.findAllInvoices();

            res.status(200).json({ data: findAllInvoicesData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getInvoiceById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const invoiceId: string = req.params.id;
            const findOneInvoiceData: Invoice = await this.invoiceService.findInvoiceById(invoiceId);

            res.status(200).json({ data: findOneInvoiceData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createInvoice = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const invoiceData: Invoice = req.body;
            const createInvoiceData: Invoice = await this.invoiceService.createInvoice(invoiceData);

            res.status(201).json({ data: createInvoiceData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateInvoice = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const invoiceId: string = req.params.id;
            const invoiceData: Invoice = req.body;
            const updateInvoiceData: Invoice = await this.invoiceService.updateInvoice(invoiceId, invoiceData);

            res.status(200).json({ data: updateInvoiceData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteInvoice = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const invoiceId: string = req.params.id;
            const deleteInvoiceData: Invoice = await this.invoiceService.deleteInvoice(invoiceId);

            res.status(200).json({ data: deleteInvoiceData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
}

export default InvoiceController;
