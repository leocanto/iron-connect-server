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

export const updateTraining = async (idClient, idTraining, newBody) => {
    await databaseConnection();
    const client = await Client.findById(idClient);
    if (!client) throw new Error('Client not found');
    const training = client.training.find((training) => training._id == idTraining);
    if (!training) throw new Error('Training not found');
    training.description_division = newBody.description_division;
    training.day = newBody.day;
    await client.save();
}

export const updateExercice = async (idClient, idTraining, idExercice, newBody) => {
    await databaseConnection();
    const client = await Client.findById(idClient);
    if (!client) throw new Error('Client not found');
    const training = client.training.find((training) => training._id == idTraining);
    if (!training) throw new Error('Training not found');
    const exercice = training.exercice.find((exercice) => exercice._id == idExercice);
    if (!exercice) throw new Error('Exercice not found');
    exercice.name = newBody.name;
    exercice.series = newBody.series;
    exercice.repetitions = newBody.repetitions;
    exercice.weight = newBody.weight;
    exercice.description = newBody.description;
    await client.save();
}

export const updateMeal = async (idClient, idMeal, newBody) => {
    await databaseConnection();
    const client = await Client.findById(idClient);
    if (!client) throw new Error('Client not found');
    const meal = client.meal.find((meal) => meal._id == idMeal);
    if (!meal) throw new Error('Meal not found');
    meal.description = newBody.description;
    meal.time = newBody.time;
    await client.save();
}

export const updateFood = async (idClient, idMeal, idFood, newBody) => {
    await databaseConnection();
    const client = await Client.findById(idClient);
    if (!client) throw new Error('Client not found');
    const meal = client.meal.find((meal) => meal._id == idMeal);
    if (!meal) throw new Error('Meal not found');
    const foods = meal.foods.find((foods) => foods._id == idFood);
    if (!foods) throw new Error('Exercice not found');
    foods.name = newBody.name;
    foods.amount = newBody.amount;
    foods.description = newBody.description;
    await client.save();
}