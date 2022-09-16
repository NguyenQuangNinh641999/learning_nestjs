import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user.module";
import {UserEntity} from "./user";

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'test',
    entities:[UserEntity],
    synchronize:true,
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}