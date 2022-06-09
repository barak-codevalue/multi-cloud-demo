import { Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { PrayPublisher } from 'src/publishers/pray.publisher';

@Injectable()
export class RitualsService {
  constructor(private readonly prayBroker: PrayPublisher) {}
  async resolvePray(pray: PrayDto): Promise<PrayDto> {
    return await this.prayBroker.publish(pray);
  }

  async sacrifice(creatureId: string): Promise<void> {
    console.log(`kill creature ${creatureId}`);
  }
}
