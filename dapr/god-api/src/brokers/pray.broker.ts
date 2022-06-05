import { Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { DaprClient } from 'dapr-client';

const DAPR_HOST = process.env.CLIENT_DAPR_HOST;
const DAPR_Port = process.env.CLIENT_DAPR_Port;

@Injectable()
export class PrayBroker {
  daprClient: DaprClient = new DaprClient(DAPR_HOST, DAPR_Port);
  /**
   *
   */

  async publish(pray: PrayDto): Promise<PrayDto> {
    this.daprClient.pubsub.publish('prayers-pubsub', 'prayers', pray);
    // const stateObjects = Object.keys(prayDoc).map((key) => ({
    //   key: key,
    //   value: prayDoc[key],
    // }));
    // await this.daprClient.state.save('prayers', [
    //   {
    //     key: createUuid(),
    //     value: JSON.stringify(prayDoc),
    //   },
    // ]);

    return pray;
  }
}
