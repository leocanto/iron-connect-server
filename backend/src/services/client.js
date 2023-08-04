import databaseConnection from '../utils/db.js';
import Client from '../models/client.js';

export const listClient = async () => {
    await databaseConnection();
    const clients = await Client.find();
    return clients;
}

export const listMeal = async (clientId) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    return client.meal;
}

export const addNewClient = async (client) => {
    await databaseConnection();
    const newClient = await Client.create(client);
    return newClient;
}

export const addNewMeal = async (clientId, meal) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    client.meal.push(meal);
    await client.save();
}

export const addNewFood = async (clientId, mealId, food) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    const meal = client.meal.find((meal) => meal._id == mealId);
    if (!meal) throw new Error('Meal not found');
    meal.foods.push(food);
    await client.save();
}

export const addNewTraining = async (clientId, training) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    client.training.push(training);
    await client.save();
}

export const addNewExercice = async (clientId, trainingId, exercice) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    const training = client.training.find((training) => training._id == trainingId);
    if (!training) throw new Error('Training not found');
    training.exercice.push(exercice);
    await client.save();
}

export const addNewFoodByIndex = async (clientId, mealId, food) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    if (!client.meal[mealId]) throw new Error('Meal not found');
    client.meal[mealId].foods.push(food);

    await client.save();
}

export const deleteClient = async (id) => {
    await databaseConnection();
    await Client.findByIdAndDelete(id);
}

export const deleteMeal = async (clientId, mealId) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    if (!client.meal._id == mealId) throw new Error('Meal not found');
    client.meal.remove(mealId);
    await client.save();
}

export const deleteFood = async (clientId, mealId, foodId) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');

    if (!client.meal._id == mealId) throw new Error('Meal not found');

    const meal = client.meal.find((meal) => meal._id == mealId);

    meal.foods.remove(foodId);
    await client.save();
}

export const deleteTraining = async (clientId, trainingId) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');
    if (!client.training._id == trainingId) throw new Error('Meal not found');
    client.training.remove(trainingId);
    await client.save();
}

export const deleteExercice = async (clientId, trainingId, exerciceId) => {
    await databaseConnection();
    const client = await Client.findById(clientId);
    if (!client) throw new Error('Client not found');

    if (!client.training._id == trainingId) throw new Error('Meal not found');

    const training = client.training.find((training) => training._id == trainingId);

    training.exercice.remove(exerciceId);
    await client.save();
}

export const updateClient = async (id, newBody) => {
    await databaseConnection();
    await Client.findByIdAndUpdate(id, newBody);
}