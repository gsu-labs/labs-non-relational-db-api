import { model, Schema, Document } from 'mongoose';
import { Passenger } from '@interfaces/passenger.interface';

const passengerSchema: Schema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    luggage: {
        type: Number,
        required: true
    },
    carriage: {
        type: String,
        required: true
    }
});

const passengerModel = model<Passenger & Document>('Passenger', passengerSchema);

export default passengerModel;
