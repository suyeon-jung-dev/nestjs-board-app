import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [BoardsModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
