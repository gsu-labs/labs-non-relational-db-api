import { model, Schema, Document } from 'mongoose';
import { Check } from '@interfaces/check.interface';

const bookSchema: Schema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const checkSchema: Schema = new Schema({
    checkNumber: {
        type: Number,
        required: true,
        unique: true
    },
    saleDate: {
        type: Date
    },
    booksList: [bookSchema]
});

const checkModel = model<Check & Document>('Check', checkSchema);

export default checkModel;
