import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { PrayDto } from 'src/dtos/pray.dto';
import { RitualsService } from 'src/services/rituals.service';

@Controller('rituals')
export class RitualsController {
  constructor(private readonly ritualsService: RitualsService) {}

  @Post('pray')
  async pray(@Body() prayDto: PrayDto): Promise<any> {
    return await this.ritualsService.resolvePray(prayDto);
  }

  @Delete('sacrifice/:creatureId')
  async sacrifice(@Param('creatureId') creatureId: string): Promise<any> {
    return await this.ritualsService.sacrifice(creatureId);
  }
}
