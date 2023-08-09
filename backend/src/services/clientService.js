import databaseConnection from '../utils/db.js';
import Client from '../models/Client.js';

export const listClient = async () => {
    try {
        await databaseConnection();
        const clients = await Client.find().populate('admin');
        return clients;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const addNewClient = async (client) => {
    try {
        await databaseConnection();
        const newClient = await Client.create(client);
        return newClient;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const deleteClient = async (id) => {
    try {
        await databaseConnection();
        await Client.findByIdAndDelete(id);
    } catch (err) {
        throw new Error(err.message);
    }
}

export const updateClient = async (id, newBody) => {
    try {
        await databaseConnection();
        await Client.findByIdAndUpdate(id, newBody);
    } catch (err) {
        throw new Error(err.message);
    }
}



