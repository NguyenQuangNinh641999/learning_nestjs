import {Get, Injectable, Param} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, PrimaryGeneratedColumn, Repository } from "typeorm";
import {UserEntity } from "./user";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userReponsitory: Repository<UserEntity>
  ) {}

  findAll() {
    return this.userReponsitory.find();
  }

  findOne(id) {
    // return this.userReponsitory.findOne({id});
    return this.userReponsitory.findOne({
      where: {
        id,
      },
    });
  }

  create(user: UserEntity):Promise<UserEntity> {
    return this.userReponsitory.save(user);
  }

  update(id: string, user:UserEntity) {
    return this.userReponsitory.update(+id, user);
  }

  remove(id: number) {
    return this.userReponsitory.delete(id);
  }
}
