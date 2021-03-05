import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BioData } from '../bio-data/entities/bio-datum.entity';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentityRepository: Repository<LinkedIdentity>,

    @InjectRepository(BioData)
    private BioDataRepository: Repository<BioData>,
  ) {}

  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newStudent = this.LinkedIdentityRepository.create(
      createLinkedIdentityDto,
    );
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createLinkedIdentityDto.biodata) {
      const newBioData = this.BioDataRepository.create(
        createLinkedIdentityDto.biodata,
      );
      const user: BioData = await this.BioDataRepository.save(newBioData);
      newStudent.biodata = user;
    }
    return this.LinkedIdentityRepository.save(newStudent);
  }

  async findAll() {
    return await this.LinkedIdentityRepository.find();
    //return `This action returns all linkedIdentity`;
  }

  async findOne(id: number) {
    return await this.LinkedIdentityRepository.findOne(id);
    //return `This action returns a #${id} linkedIdentity`;
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return await this.LinkedIdentityRepository.update(
      id,
      updateLinkedIdentityDto,
    );
    //return `This action updates a #${id} linkedIdentity`;
  }

  async remove(id: number) {
    return await this.LinkedIdentityRepository.delete(id);
    //return `This action removes a #${id} linkedIdentity`;
  }
}
