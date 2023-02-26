import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel) {}

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }
}
