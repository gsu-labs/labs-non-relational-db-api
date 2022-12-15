import { model, Schema, Document } from 'mongoose';
import { Department } from '@interfaces/department.interface';

const departmentSchema: Schema = new Schema({
    departmentId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    employees: [String]
});

const departmentModel = model<Department & Document>('Department', departmentSchema);

export default departmentModel;
