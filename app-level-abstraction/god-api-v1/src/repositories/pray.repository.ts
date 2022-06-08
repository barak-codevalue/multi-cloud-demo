import { Injectable } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { createUuid } from 'src/core/utils/uuid';
import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-2' });
@Injectable()
export class PrayRepository {
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
