import { Injectable } from '@nestjs/common';
import { PrayBroker } from 'src/brokers/pray.broker';
import { PrayDto } from 'src/dtos/pray.dto';

@Injectable()
export class RitualsService {
  constructor(private readonly prayBroker: PrayBroker) {}
  async resolvePray(pray: PrayDto): Promise<PrayDto> {
    return await this.prayBroker.publish(pray);
  }

  async sacrifice(creatureId: string): Promise<void> {
    console.log(`kill creature ${creatureId}`);
  }
}
