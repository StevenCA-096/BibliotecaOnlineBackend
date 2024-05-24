import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    getBooks(): Promise<Book[]> {
        return this.booksService.getBooks();
    }

    @Post()
    createBook(@Body() newBook: CreateBookDto): Promise<Book> {
        return this.booksService.createBook(newBook);
    }

}
