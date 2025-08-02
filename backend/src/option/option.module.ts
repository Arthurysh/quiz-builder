import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Option } from '../../models/option/option.entity';
import { OptionRepository } from './option.repository';
import { OptionService } from './option.service';

@Module({
  imports: [SequelizeModule.forFeature([Option])],
  providers: [OptionRepository, OptionService],
  exports: [OptionService],
})
export class OptionModule {}
