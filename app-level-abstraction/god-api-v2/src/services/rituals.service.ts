import { Inject, Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { Repository } from 'src/repositories/interfaces';

@Injectable()
export class RitualsService {
  constructor(
    @Inject('PrayRepository')
    private readonly prayRepository: Repository<PrayDto>,
  ) {}
  async resolvePray(pray: PrayDto): Promise<PrayDto> {
    return await this.prayRepository.create(pray);
  }

  async sacrifice(creatureId: string): Promise<void> {
    console.log(`kill creature ${creatureId}`);
  }
}
