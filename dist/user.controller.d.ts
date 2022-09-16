import { UserService } from './user.service';
import { UserEntity } from "./user";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    fillAll(): Promise<UserEntity[]>;
    fillOne(id: number): Promise<UserEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    create(createUserDto: UserEntity): UserEntity;
}
