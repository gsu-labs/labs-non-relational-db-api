import { model, Schema, Document } from 'mongoose';
import { Check } from '@interfaces/check.interface';

const sale: Schema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
});

const checkSchema: Schema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date
    },
    books: [sale]
});

const checkModel = model<Check & Document>('Check', checkSchema);

export default checkModel;
