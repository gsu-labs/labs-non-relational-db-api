import { model, Schema, Document } from 'mongoose';
import { Book } from '@interfaces/book.interface';

const bookSchema: Schema = new Schema({
    type: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true,
        unique: true
    },
    coast: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const bookModel = model<Book & Document>('Book', bookSchema);

export default bookModel;
