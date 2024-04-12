import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(@Body() email:string) {
        return this.userService.addUser(email);
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
