import { EntityManager } from "typeorm";
import { AuthRepository } from "./repository";

export class AuthService {
    private readonly authRepository: AuthRepository

    constructor () {
        this.authRepository = new AuthRepository()
    }

    async GetAllUsers(cnx: EntityManager) {
        return  await this.authRepository.GetUsers(cnx)
    }
}