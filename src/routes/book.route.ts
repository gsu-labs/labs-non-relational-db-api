import { Router } from 'express';
import BookController from '@controllers/book.controller';
import { Routes } from '@interfaces/routes.interface';

class BookRoute implements Routes {
    public path = '/catalog';
    public router = Router();
    public bookController = new BookController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.bookController.getBooks);
        this.router.get(`${this.path}/:id`, this.bookController.getBookById);
        this.router.post(`${this.path}`, this.bookController.createBook);
        this.router.put(`${this.path}/:id`, this.bookController.updateBook);
        this.router.delete(`${this.path}/:id`, this.bookController.deleteBook);
    }
}

export default BookRoute;
