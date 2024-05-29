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
    publicationYear: string

    @Column()
    reviews: string

    @Column()
    category: string

    @Column({ unique: true })
    isbn: number

    @OneToMany(() => Loan, (loans) => loans.books)
    loans: Loan
}