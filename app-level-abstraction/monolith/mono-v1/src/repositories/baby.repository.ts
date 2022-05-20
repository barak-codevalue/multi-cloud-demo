import { Injectable } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';

@Injectable()
export class BabyRepository {
  async produceBaby(name: string): Promise<BabyDto> {
    await Promise.resolve();
    return { uuid: 'wqeqwe112', name };
  }
}
