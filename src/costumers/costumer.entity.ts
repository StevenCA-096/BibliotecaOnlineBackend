import { Loan } from 'src/loans/loans.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity({ name: 'costumers' })
export class Costumer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    costumerId: number

    @Column()
    Name: string

    @Column()
    surname1: string

    @Column()
    surname2: string

    @Column({ unique: true })
    mobileNumber: number

    @Column({ unique: true })
    email: string

    @OneToMany(() => Loan, (loans) => loans.costumers)
    loans: Loan
}