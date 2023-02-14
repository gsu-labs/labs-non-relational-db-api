import { model, Schema, Document } from 'mongoose';
import { Carriage } from '@interfaces/carriage.interface';

const carriageSchema: Schema = new Schema({
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    luggageNumber: {
        type: Number,
        required: true
    }
});

const carriageModel = model<Carriage & Document>('Carriage', carriageSchema);

export default carriageModel;
