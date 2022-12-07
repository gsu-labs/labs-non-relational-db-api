export interface Check {
    _id?: string;
    number: number;
    date?: Date;
    books: [{
        bookId: string;
        number: number;
    }];
}
