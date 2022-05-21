import { Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { CosmosClient } from '@azure/cosmos';
import { createUuid } from 'src/core/utils/uuid';
import { Repository } from './interfaces';

@Injectable()
export class BabyAzureRepository implements Repository<BabyDto> {
  private readonly database = {
    id: 'archnext',
  };
  private readonly container = {
    id: 'Babies',
  };

  client = new CosmosClient({
    endpoint: process.env.ENDPOINT,
    key: process.env.KEY,
  });

  async create(baby: BabyDto): Promise<BabyDto> {
    const babyDoc = { id: createUuid(), ...baby };
    await this.client
      .database(this.database.id)
      .container(this.container.id)
      .items.upsert(babyDoc);
    return babyDoc;
  }
}
