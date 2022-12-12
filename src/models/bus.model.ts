import { model, Schema, Document } from 'mongoose';
import { Bus } from '@interfaces/bus.interface';

const busSchema: Schema = new Schema({
    busNumber: {
        type: Number,
        required: true
    },
    year: {
        type: Number
    },
    mileage: {
        type: Number,
        required: true
    },
    routeNumber: {
        type: Number,
        required: true
    },
    departurePoint: {
        type: String,
        required: true
    },
    destinationPoint: {
        type: String,
        required: true
    }
});

const busModel = model<Bus & Document>('Bus', busSchema);

export default busModel;
