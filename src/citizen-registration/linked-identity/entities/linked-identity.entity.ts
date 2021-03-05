import { BioData } from 'src/citizen-registration/bio-data/entities/bio-datum.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class LinkedIdentity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NIN: number;

  @Column()
  BVN: number;

  @Column()
  mobileNumbers: number;

  @JoinColumn()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => BioData, (biodata) => biodata.linkedIdentity, {
    cascade: true,
  })
  biodata: BioData;
}
