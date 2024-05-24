import { Book } from 'src/books/book.entity'
import { Costumer } from 'src/costumers/costumer.entity'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity({ name: 'loans' })
export class Loan {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    loanCode: number

    @Column()
    bookName: string

    @Column()
    bookCode: number

    @Column()
    costumerId: number

    @Column({ type: 'datetime' })
    dateLoan: Date

    @Column({ type: 'datetime' })
    dateReturnLoan: Date

    @ManyToOne(() => Book, (books) => books.loans)
    books: Book

    @ManyToOne(() => Costumer, (costumers) => costumers.loans)
    costumers: Costumer
}