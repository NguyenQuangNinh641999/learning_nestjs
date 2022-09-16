import {Controller, Get, Post, Delete, HttpStatus, Param, Res, Body} from '@nestjs/common';
import { UserService } from './user.service';
import {get} from "http";
import {UserEntity} from "./user";

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @Get()
    async fillAll(){
        const response = await this.userService.findAll();
        return response;
        // res.status(HttpStatus.OK).json({payload:response});
   }

    @Get(":id")
    async fillOne(@Param() id:number){
        const response = await this.userService.findOne(id);
        return response;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(id);
    }

    @Post()
    create(@Body() createUserDto: UserEntity) {
        return this.userService.create(createUserDto);
    }
}
