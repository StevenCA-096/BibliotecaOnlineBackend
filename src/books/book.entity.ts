import { Loan } from 'src/loans/loans.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bookName: string

    @Column()
    synopsis: string

    @Column()
    imgUrl:string

    @Column()
    authorName: string

    @Column()
    category: string

    @Column({ unique: true })
    isbn: string

    @OneToMany(() => Loan, (loans) => loans.books)
    loans: Loan
}