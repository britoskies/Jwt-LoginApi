import bcrypt from 'bcryptjs';

export interface iUser {
    id: number;
    username: string;
    password: string;
    encryptPw(password: string): Promise<string>
};

// Password encryption method

export const encryptPw = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}