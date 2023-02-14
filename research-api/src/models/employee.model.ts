import { model, Schema, Document } from 'mongoose';
import { Employee } from '@interfaces/employee.interface';

const employeeSchema: Schema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    }
});

const employeeModel = model<Employee & Document>('Employee', employeeSchema);

export default employeeModel;
