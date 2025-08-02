import { Injectable } from '@nestjs/common';
import { OptionRepository } from './option.repository';
import { CreateOptionDto } from './dto/create-option.dto';
import { Transaction } from 'sequelize';
import { Option } from '../../models/option/option.entity';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepository: OptionRepository) {}

  async createOptions(
    optionsDto: CreateOptionDto[],
    questionId: number,
    transaction?: Transaction,
  ): Promise<Option[]> {
    const createdOptions: Option[] = [];

    for (const optionDto of optionsDto) {
      const option = await this.optionRepository.createOption(
        {
          text: optionDto.text,
          isCorrect: optionDto.isCorrect,
          questionId: questionId,
        },
        transaction,
      );

      createdOptions.push(option);
    }

    return createdOptions;
  }
}
