import databaseConnection from '../utils/db.js';
import Admin from '../models/admin.js';

export const listAdmin = async () => {
    await databaseConnection();
    const admin = await Admin.find();
    return admin;
}

export const login = async (body) => {
    await databaseConnection();
    const admin = await Admin.findOne();
    if (!admin) throw new Error("Not found");
    if (admin.login !== body.login) throw new Error("Login is incorrect");
    if (admin.password !== body.password) throw new Error("Password is incorrect");

    return admin;
}

export const register = async (admin) => {
    await databaseConnection();
    const newClient = await Admin.create(admin);
    return newClient;
}