import databaseConnection from '../utils/db.js';
import Training from '../models/Training.js';

export const listTraining = async () => {
    try {
        await databaseConnection();
        const training = await Training.find().populate('client');
        return training;
    }catch {
        throw new Error('Error on list training');
    }
}

export const addNewTraining = async (training) => {
    await databaseConnection();
    const newTraining = await Training.create(training);
    return newTraining;
}

export const addNewExercice = async (trainingId, exercice) => {
    await databaseConnection();
    const training = await Training.findById(trainingId);
    if (!training) throw new Error('Training not found');
    training.exercice.push(exercice);
    await training.save();
}

export const deleteTraining = async (trainingId) => {
    await databaseConnection();
    await Training.findByIdAndDelete(trainingId);
}

export const deleteExercice = async (trainingId, exerciceId) => {
    await databaseConnection();
    const training = await Training.findById(trainingId);
    if (!training) throw new Error('Training not found');
    const exercice = training.exercice.find((exercice) => exercice._id == exerciceId);
    if (!exercice) throw new Error('Exercice not found');
    training.exercice.remove(exerciceId);
    await training.save();
}

export const updateTraining = async (idTraining, newBody) => {
    await databaseConnection();
    const training = await Training.findById(idTraining);
    if (!training) throw new Error('Training not found');
    training.client = training.client;
    training.description_division = newBody.description_division;
    training.day = newBody.day;
    await training.save();
}

export const updateExercice = async (idTraining, idExercice, newBody) => {
    await databaseConnection();
    const training = await Training.findById(idTraining);
    if (!training) throw new Error('Training not found');
    const exercice = training.exercice.find((exercice) => exercice._id == idExercice);
    if (!exercice) throw new Error('Exercice not found');
    exercice.name = newBody.name;
    exercice.series = newBody.series;
    exercice.repetitions = newBody.repetitions;
    exercice.weight = newBody.weight;
    exercice.description = newBody.description;
    await training.save();
}