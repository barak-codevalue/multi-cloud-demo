import { Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { v4 as uuidv4 } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import * as AWS from 'aws-sdk';
AWS.config.update({ region: 'us-east-2' });

@Injectable()
export class BabyRepository {
  client = new DocumentClient({
    apiVersion: '2012-08-10',
  });

  async produceBaby(baby: BabyDto): Promise<BabyDto> {
    const babyDoc = { id: uuidv4(), ...baby };
    await this.client
      .put({
        TableName: 'Babies',
        Item: babyDoc,
      })
      .promise();
    return babyDoc;
  }
}
