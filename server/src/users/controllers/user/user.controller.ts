import { UserService } from './../../services/user/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/models/user.model';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    // @Get('users')
    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    // @Get(':id')
    @Get(':id/:postId')
    getUserById(@Param('id') id: number, @Param('postId') postId: string){
        console.log(id);
        return this.userService.getUserById(id);
    }

    // @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response){
    //     console.log(request.body);
    //     return response.send('Created');
    // }

    @Post('create')
    @UsePipes(new ValidationPipe())
    create(@Body() userData: User ){
        console.log(userData);
        return this.userService.createUser(userData);
    }

    @Put('update')
    updateUser(@Body() data: User){
        console.log(data);
        return this.userService.updateUser(data);
    }

    @Delete('delete')
    deteleAllUser(){
        return this.userService.deleteAllUser();        
    }

    @Delete('delete/:id')
    deleteUserById(@Param('id') id: number){
        return this.userService.deteleUserById(id);
    }
}


