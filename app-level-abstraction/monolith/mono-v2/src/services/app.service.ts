import { Inject, Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { Repository } from 'src/repositories/interfaces';

@Injectable()
export class AppService {
  constructor(
    @Inject('BabyRepository')
    private readonly babyRepository: Repository<BabyDto>,
  ) {}
  async produceBaby(baby: BabyDto): Promise<BabyDto> {
    return await this.babyRepository.create(baby);
  }
}
