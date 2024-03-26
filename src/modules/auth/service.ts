import { EntityManager } from "typeorm";
import { AuthRepository } from "./repository";
import { UserBody } from "../../interfaces/User.interface";
import { User } from "../../entity/User";

export class AuthService {
    private readonly authRepository: AuthRepository

    constructor () {
        this.authRepository = new AuthRepository()
    }

    async GetAllUsers(cnx: EntityManager) {
        return  await this.authRepository.GetUsers(cnx)
    }
    async GetOneUser(cnx: EntityManager, payload: string) {
        return  await this.authRepository.FindUser(cnx, payload)
    
    
    }
    async RegisterUser(cnx: EntityManager, payload: User) {
        
        return  await this.authRepository.SaveUser(cnx, payload)
    }
}