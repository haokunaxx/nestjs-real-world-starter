import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { env } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
