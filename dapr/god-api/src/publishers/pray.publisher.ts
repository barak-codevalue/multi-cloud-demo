import { Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { DaprClient } from 'dapr-client';

const DAPR_HOST = process.env.CLIENT_DAPR_HOST;
const DAPR_Port = process.env.CLIENT_DAPR_Port;

@Injectable()
export class PrayPublisher {
  daprClient: DaprClient = new DaprClient(DAPR_HOST, DAPR_Port);

  async publish(pray: PrayDto): Promise<PrayDto> {
    this.daprClient.pubsub.publish('prayers-pubsub', 'prayers', pray);
    return pray;
  }
}
