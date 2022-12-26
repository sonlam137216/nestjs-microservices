import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public phoneNumber?: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public password?: string;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;
}

export default User;
