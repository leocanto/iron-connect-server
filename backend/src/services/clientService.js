import databaseConnection from '../utils/db.js';
import Client from '../models/Client.js';

export const listClient = async () => {
    await databaseConnection();
    const clients = await Client.find().populate('admin');
    return clients;
}

export const addNewClient = async (client) => {
    await databaseConnection();
    const newClient = await Client.create(client);
    return newClient;
}

export const deleteClient = async (id) => {
    await databaseConnection();
    await Client.findByIdAndDelete(id);
}

export const updateClient = async (id, newBody) => {
    await databaseConnection();
    await Client.findByIdAndUpdate(id, newBody);
}



