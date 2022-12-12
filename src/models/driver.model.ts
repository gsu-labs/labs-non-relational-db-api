import { model, Schema, Document } from 'mongoose';
import { Driver } from '@interfaces/driver.interface';

const driverSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    workExperience: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

const driverModel = model<Driver & Document>('Driver', driverSchema);

export default driverModel;
