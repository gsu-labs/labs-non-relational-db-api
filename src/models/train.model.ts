import { model, Schema, Document } from 'mongoose';
import { Train } from '@interfaces/train.interface';

const trainSchema: Schema = new Schema({
    number: {
        type: Number,
        required: true
    },
    departurePoint: {
        type: String,
        required: true,
        unique: true
    },
    destinationPoint: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date
    },
    carriages: [String]
});

const trainModel = model<Train & Document>('Train', trainSchema);

export default trainModel;
