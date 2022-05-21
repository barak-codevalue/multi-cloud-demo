import { Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { BabyRepository } from 'src/repositories/baby.repository';

@Injectable()
export class AppService {
  constructor(private readonly babyRepository: BabyRepository) {}
  async produceBaby(baby: BabyDto): Promise<BabyDto> {
    return await this.babyRepository.create(baby);
  }
}
