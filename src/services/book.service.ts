import { HttpException } from '@exceptions/HttpException';
import { Book } from '@interfaces/book.interface';
import bookModel from '@models/book.model';
import { isEmpty } from '@utils/util';

class BookService {
    public books = bookModel;

    public async findAllBooks(): Promise<Book[]> {
        const books: Book[] = await this.books.find();
        return books;
    }

    public async findBookById(bookId: string): Promise<Book> {
        if (isEmpty(bookId)) throw new HttpException(400, 'BookId is empty');

        const findBook: Book = await this.books.findOne({ _id: bookId });
        if (!findBook) throw new HttpException(409, 'Book doesn\'t exist');

        return findBook;
    }

    public async createBook(bookData: Book): Promise<Book> {
        if (isEmpty(bookData)) throw new HttpException(400, 'bookData is empty');

        const createBookData: Book = await this.books.create({ ...bookData });
        return createBookData;
    }

    public async updateBook(bookId: string, bookData: Book): Promise<Book> {
        if (isEmpty(bookData)) throw new HttpException(400, 'bookData is empty');

        const updateBookById: Book = await this.books.findByIdAndUpdate(bookId, { ...bookData });
        if (!updateBookById) throw new HttpException(409, 'Book doesn\'t exist');

        return updateBookById;
    }

    public async deleteBook(bookId: string): Promise<Book> {
        const deleteBookById: Book = await this.books.findByIdAndDelete(bookId);
        if (!deleteBookById) throw new HttpException(409, 'Book doesn\'t exist');

        return deleteBookById;
    }
}

export default BookService;
