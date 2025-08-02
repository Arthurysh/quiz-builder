import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Option } from '../../models/option/option.entity';
import { Transaction } from 'sequelize';
import { CreateOptionDto } from './dto/create-option.dto';

@Injectable()
export class OptionRepository {
  constructor(
    @InjectModel(Option)
    private readonly optionModel: typeof Option,
  ) {}

  async createOption(data: CreateOptionDto, transaction?: Transaction): Promise<Option> {
    return await this.optionModel.create(data, { transaction });
  }
}
