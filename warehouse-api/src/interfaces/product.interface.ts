export interface Product {
    _id?: string;
    productId: number;
    name: string;
    unit: string;
    price: number;
    date?: Date;
    amount: number;
}
