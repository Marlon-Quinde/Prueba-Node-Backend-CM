import { NextFunction, Request, Response } from "express";
import { EntityManager } from "typeorm";
import { AuthService } from "./service";
import { UserBody } from "../../interfaces/User.interface";
import { User } from "../../entity/User";
import { comparatePassword, hashPasswordSalts } from "../../helpers/hashPassword";


const authService = new AuthService()

export const LoginAutentication  = async (cnx: EntityManager, payload: UserBody) => {
    try {
        const {password, email} = payload
        const user = await authService.GetOneUser(cnx, email)

        if(!user) throw new Error('El usuario no existe');


        const {password: passHash} = user

        const isEquals = await comparatePassword(password, passHash)

        if(!isEquals) throw new Error('Contraseñas no coinciden');

        

        return user
    } catch (error) {
        console.log(error)
    }

}


export const RegisterUser  = async (cnx: EntityManager, payload: User) => {
    try {
        const {password, email ,...res} = payload
        const user = await authService.GetOneUser(cnx, email)

        if(user) throw new Error('El usuario ya esta registrado');


        const hashPassword = await hashPasswordSalts(password)
        
        const newUser: User = {
            ...res,
            password: hashPassword,
            email
        }

        const userSave = await authService.RegisterUser(cnx, newUser)


        if(!userSave) throw new Error('No se creo el usuario')


        return userSave
    } catch (error) {
        console.log(error)
    }

}