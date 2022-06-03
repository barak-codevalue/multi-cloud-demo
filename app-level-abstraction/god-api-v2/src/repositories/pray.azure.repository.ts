import { Injectable } from '@nestjs/common';
import { CosmosClient } from '@azure/cosmos';
import { createUuid } from 'src/core/utils/uuid';
import { Repository } from './interfaces';
import { PrayDto } from 'src/dtos/pray.dto';

@Injectable()
export class PrayAzureRepository implements Repository<PrayDto> {
  private readonly database = {
    id: 'archnext',
  };
  private readonly container = {
    id: 'Prayers',
  };

  client = new CosmosClient({
    endpoint: process.env.ENDPOINT,
    key: process.env.KEY,
  });

  async create(pray: PrayDto): Promise<PrayDto> {
    const prayDoc = { id: createUuid(), ...pray };
    await this.client
      .database(this.database.id)
      .container(this.container.id)
      .items.upsert(prayDoc);
    return pray;
  }
}
