import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
    private tempUsers = [
        {
            id: 1,
            username: 'Minh Quan',
            email: 'quan@gmai.com',
        },

        {
            id: 2,
            username: "Trung gay",
            email: "supergay@gmail.com"
        },

        {   
            id: 3,
            username: 'Trong Soi',
            email: 'supersoi@gmail.com'
        }
    ];

    getUsers(){
        return [...this.tempUsers];
    }

    createUser(userData: User){
        this.tempUsers.push(userData);
    }

    getUserById(id: number){
        const userIndex = this.tempUsers.findIndex(user => user.id === id);
        return {...this.tempUsers[userIndex]}
    }

    updateUser(userData: User){
        const userIndex = this.tempUsers.findIndex(user => user.id === userData.id);
        this.tempUsers[userIndex] = userData;
    }

    deleteAllUser(){
        this.tempUsers = [];
        return {
            mesasage: 'Delete all user successfully',
            data: this.tempUsers,
        }
    }

    deteleUserById(id: number){
        const userIndex = this.tempUsers.findIndex(user => user.id === id);
        this.tempUsers.splice(userIndex, 1);
        return this.tempUsers
    }
}
