import { Response } from "express";
import { EntityManager } from "typeorm";
import { User } from "../../entity/User";

export class AuthRepository {
    async GetUsers(cnx: EntityManager) {
        console.log(cnx)
        const users = await cnx.find(User)
        return users
    }
}