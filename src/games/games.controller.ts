import { Controller, Get } from '@nestjs/common/decorators';
import { GameService } from './games.service';
import { Game } from './schemas/game.schema';

@Controller('api/games')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }
}
