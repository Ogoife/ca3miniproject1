import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { LinkedIdentityController } from './linked-identity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { BioData } from '../bio-data/entities/bio-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity,BioData])],
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService],
})
export class LinkedIdentityModule {}
