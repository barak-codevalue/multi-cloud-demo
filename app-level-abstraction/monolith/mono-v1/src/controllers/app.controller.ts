import { Body, Controller, Post } from '@nestjs/common';
import { BabyDto } from 'src/dtos/baby.dto';
import { AppService } from 'src/services/app.service';

@Controller('babies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async produceBaby(@Body() babyParam: BabyDto): Promise<any> {
    return await this.appService.produceBaby(babyParam.name);
  }
}
