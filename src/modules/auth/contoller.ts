import { NextFunction, Request, Response } from "express";
import { EntityManager } from "typeorm";
import { AuthService } from "./service";


const authService = new AuthService()

export const LoginAutentication  = async (cnx: EntityManager) => {
    try {
        const users = await authService.GetAllUsers(cnx)
        return users
    } catch (error) {
        console.log(error)
    }

}