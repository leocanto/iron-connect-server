import databaseConnection from '../utils/db.js';
import Admin from '../models/admin.js';

export const listAdmin = async () => {
    try {
        await databaseConnection();
        const adminList = await Admin.find();
        return adminList;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const login = async (body) => {
    try {
        await databaseConnection();
        const admin = await Admin.findOne({ login: body.login, password: body.password });
        if (!admin) throw new Error("Not found");
        if (admin.login !== body.login) throw new Error("Login is incorrect");
        if (admin.password !== body.password) throw new Error("Password is incorrect");
        return admin;
    }
    catch (err) {
        throw new Error(err.message);
    }

}

export const register = async (admin) => {
    try {
        await databaseConnection();
        const newAdmin = await Admin.create(admin);
        return newAdmin;
    } catch (err) {
        throw new Error(err.message);
    }
}