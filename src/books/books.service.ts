import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto'

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

    createBook(Book: CreateBookDto) {
        const newBook = this.bookRepository.create(Book)
        return this.bookRepository.save(newBook)
    }

    getBooks() {
        return this.bookRepository.find()
    }

}
