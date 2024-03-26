import { Response } from "express";
import { EntityManager } from "typeorm";
import { User } from "../../entity/User";
import { UserBody } from "../../interfaces/User.interface";

export class AuthRepository {
    async GetUsers(cnx: EntityManager) {
        const users = await cnx.find(User)
        return users
    }

    async FindUser(cnx: EntityManager, email: string) {
        const user = await cnx.findOne(User, {where: {email}})
        return user
    }

    async SaveUser(cnx: EntityManager, payload: User) {
        const userRegister = await cnx.save(User, payload)
        return userRegister
    }
}