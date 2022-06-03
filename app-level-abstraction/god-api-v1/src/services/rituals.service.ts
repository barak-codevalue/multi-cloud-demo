import { Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { PrayRepository } from 'src/repositories/pray.repository';

@Injectable()
export class RitualsService {
  constructor(private readonly prayRepository: PrayRepository) {}
  async resolvePray(pray: PrayDto): Promise<PrayDto> {
    return await this.prayRepository.create(pray);
  }

  async sacrifice(creatureId: string): Promise<void> {
    console.log(`kill creature ${creatureId}`);
  }
}
