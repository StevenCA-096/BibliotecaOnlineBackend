import { Book } from 'src/books/book.entity'
import { Costumer } from 'src/costumers/costumer.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity({ name: 'loans' })
export class Loan {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'timestamp' })
    startDate: Date

    @Column({ type: 'timestamp' })
    endDate: Date

    @ManyToOne(() => Book, (books) => books.loans)
    books: Book

    @ManyToOne(() => Costumer, (costumers) => costumers.loans)
    costumers: Costumer
}