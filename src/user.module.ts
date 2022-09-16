import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user";
import {UserController} from "./user.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {

}
