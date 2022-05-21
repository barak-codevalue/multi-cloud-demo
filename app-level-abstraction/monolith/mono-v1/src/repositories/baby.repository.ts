import { Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { createUuid } from 'src/core/utils/uuid';

@Injectable()
export class BabyRepository {
  client = new DocumentClient({
    apiVersion: '2012-08-10',
  });

  async produceBaby(baby: BabyDto): Promise<BabyDto> {
    const babyDoc = { id: createUuid(), ...baby };
    await this.client
      .put({
        TableName: 'Babies',
        Item: babyDoc,
      })
      .promise();
    return babyDoc;
  }
}
