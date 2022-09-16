import { Repository } from "typeorm";
import { UserEntity } from "./user";
export declare class UserService {
    private userReponsitory;
    constructor(userReponsitory: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(id: any): Promise<UserEntity>;
    create(user: UserEntity): UserEntity;
    update(id: string, user: UserEntity): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
