import { LinkedIdentity } from 'src/citizen-registration/linked-identity/entities/linked-identity.entity';
import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
  
  @Entity()
  export class BioData {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column({ nullable: true })
    middleName: string;
  
    @Column()
    lastName: string;
  
    @Column({ nullable: true })
    nationality: string;
  
    @Column({ nullable: true })
    dateOfBirth: Date;
  
    @Column({ nullable: true })
    countryOfBirth: string;
  
    @Column({ default: true })
    stateOfBirth: boolean;
  
    @Column()
    townOfBirth: string;
  
    @Column()
    residentialaddress: string;
  
    @Column()
    profession: string;
  
    @Column({ default: true })
    isActive: boolean;
  
    @JoinColumn()
    @OneToOne(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (type) => LinkedIdentity,
      (linkedIdentity) => linkedIdentity.biodata,
    )
    linkedIdentity: LinkedIdentity;
  }
  