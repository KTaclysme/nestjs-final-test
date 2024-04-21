import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    addUser(@Body('email') email: string) {
        return this.userService.addUser(email);
    }

    @Get()
    getUser(email: string) {
        return this.userService.getUser(email);
    }

    @Delete()
    resetData() {
        return this.userService.resetData();
    }
}
