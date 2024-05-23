import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    bookCode: number

    @Column()
    bookName: string

    @Column()
    authorName: string

    @Column()
    category: string

    @Column({ unique: true })
    isbn: string
}