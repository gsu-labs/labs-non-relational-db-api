import { model, Schema, Document } from 'mongoose';
import { Invoice } from '@interfaces/invoice.interface';

const invoiceSchema: Schema = new Schema({
    invoiceId: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mol: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    }
});

const invoiceModel = model<Invoice & Document>('Invoice', invoiceSchema);

export default invoiceModel;
