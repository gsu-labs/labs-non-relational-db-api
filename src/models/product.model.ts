import { model, Schema, Document } from 'mongoose';
import { Product } from '@interfaces/product.interface';

const productSchema: Schema = new Schema({
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    },
    amount: {
        type: Number,
        required: true
    }
});

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;
