import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioData } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  constructor(
    @InjectRepository(BioData)
    private BioDataRepository: Repository<BioData>,
  ) {}

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBioData: BioData = this.BioDataRepository.create(
      createBioDatumDto,
    );
    return await this.BioDataRepository.save(newBioData);
    //return 'This action adds a new bioDatum';
  }

  async findAll() {
    return await this.BioDataRepository.find();
    //return `This action returns all bioData`;
  }

  async findOne(id: number) {
    return await this.BioDataRepository.findOne(id);
    //return `This action returns a #${id} bioDatum`;
  }

  async update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    return await this.BioDataRepository.update(id, updateBioDatumDto);
    //return `This action updates a #${id} bioDatum`;
  }

  async remove(id: number) {
    return await this.BioDataRepository.delete(id);
    //return `This action removes a #${id} bioDatum`;
  }
}
