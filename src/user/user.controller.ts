import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AddUserDto } from './dto/add.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(@Body() addUserDto: AddUserDto) {
        return this.userService.addUser(addUserDto);
    }

    @Get()
    getUser(){
        return this.userService.getUser();
    }

    @Delete()
    resetData(){
        return this.userService.resetData();
    }
}
