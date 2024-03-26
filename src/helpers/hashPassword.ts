import bcrypt from "bcrypt"
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


export const hashPasswordSalts = async (password: string): Promise<string> => {

    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword  = await bcrypt.hash(password, salt);
    
    return hashPassword
}

export const comparatePassword = async (password: string, passwordHash: string) => {
    const result = await bcrypt.compare(password, passwordHash)
    return result
}