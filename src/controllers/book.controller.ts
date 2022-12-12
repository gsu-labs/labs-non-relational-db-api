import { NextFunction, Request, Response } from 'express';
import { Book } from '@interfaces/book.interface';
import BookService from '@services/book.service';

class BookController {
    public bookService = new BookService();

    public getBooks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBooksData: Book[] = await this.bookService.findAllBooks();

            res.status(200).json({ data: findAllBooksData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getBookById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookId: string = req.params.id;
            const findOneBookData: Book = await this.bookService.findBookById(bookId);

            res.status(200).json({ data: findOneBookData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookData: Book = req.body;
            const createBookData: Book = await this.bookService.createBook(bookData);

            res.status(201).json({ data: createBookData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookId: string = req.params.id;
            const bookData: Book = req.body;
            const updateBookData: Book = await this.bookService.updateBook(bookId, bookData);

            res.status(200).json({ data: updateBookData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookId: string = req.params.id;
            const deleteBookData: Book = await this.bookService.deleteBook(bookId);

            res.status(200).json({ data: deleteBookData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };

    public getBooksByCost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const maxCost: number = +req.params.max;
            const findBooksData: Book[] = await this.bookService.findBooksByCost(maxCost);

            res.status(200).json({ data: findBooksData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };
}

export default BookController;
