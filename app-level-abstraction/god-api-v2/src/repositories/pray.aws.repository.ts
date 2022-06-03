import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { createUuid } from 'src/core/utils/uuid';
import { PrayDto } from 'src/dtos/pray.dto';
import { Repository } from './interfaces';

@Injectable()
export class PrayAwsRepository implements Repository<PrayDto> {
  client = new DocumentClient({
    apiVersion: '2012-08-10',
  });

  async create(pray: PrayDto): Promise<PrayDto> {
    const prayDoc = { id: createUuid(), ...pray };
    await this.client
      .put({
        TableName: 'Prayers',
        Item: prayDoc,
      })
      .promise();

    return pray;
  }
}
