import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [UsersModule, RecommendationsModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
