import { HttpException } from '@exceptions/HttpException';
import { Invoice } from '@interfaces/invoice.interface';
import invoiceModel from '@models/invoice.model';
import { isEmpty } from '@utils/util';

class InvoiceService {
    public invoices = invoiceModel;

    public async findAllInvoices(): Promise<Invoice[]> {
        const invoices: Invoice[] = await this.invoices.find();
        return invoices;
    }

    public async findInvoiceById(invoiceId: string): Promise<Invoice> {
        if (isEmpty(invoiceId)) throw new HttpException(400, 'InvoiceId is empty');

        const findInvoice: Invoice = await this.invoices.findOne({ _id: invoiceId });
        if (!findInvoice) throw new HttpException(409, 'Invoice doesn\'t exist');

        return findInvoice;
    }

    public async createInvoice(invoiceData: Invoice): Promise<Invoice> {
        if (isEmpty(invoiceData)) throw new HttpException(400, 'invoiceData is empty');

        const createInvoiceData: Invoice = await this.invoices.create({ ...invoiceData });
        return createInvoiceData;
    }

    public async updateInvoice(invoiceId: string, invoiceData: Invoice): Promise<Invoice> {
        if (isEmpty(invoiceData)) throw new HttpException(400, 'invoiceData is empty');

        const updateInvoiceById: Invoice = await this.invoices.findByIdAndUpdate(invoiceId, { ...invoiceData });
        if (!updateInvoiceById) throw new HttpException(409, 'Invoice doesn\'t exist');

        return updateInvoiceById;
    }

    public async deleteInvoice(invoiceId: string): Promise<Invoice> {
        const deleteInvoiceById: Invoice = await this.invoices.findByIdAndDelete(invoiceId);
        if (!deleteInvoiceById) throw new HttpException(409, 'Invoice doesn\'t exist');

        return deleteInvoiceById;
    }
}

export default InvoiceService;
