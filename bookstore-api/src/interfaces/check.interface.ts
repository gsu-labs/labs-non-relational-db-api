export interface Check {
    _id?: string;
    checkNumber: number;
    saleDate?: Date;
    booksList: [{
        bookId: string;
        amount: number;
    }];
}
