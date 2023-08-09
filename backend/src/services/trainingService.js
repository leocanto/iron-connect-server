import databaseConnection from '../utils/db.js';
import Training from '../models/Training.js';

export const listTraining = async () => {
    try {
        await databaseConnection();
        const training = await Training.find().populate('client');
        return training;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const addNewTraining = async (training) => {
    try {
        await databaseConnection();
        const newTraining = await Training.create(training);
        return newTraining;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const addNewExercice = async (trainingId, exercice) => {
    try {
        await databaseConnection();
        const training = await Training.findById(trainingId);
        if (!training) throw new Error('Training not found');
        training.exercice.push(exercice);
        await training.save();
    } catch (err) {
        throw new Error(err.message);
    }

}

export const deleteTraining = async (trainingId) => {
    try {
        await databaseConnection();
        await Training.findByIdAndDelete(trainingId);
    } catch (err) {
        throw new Error(err.message);
    }
}

export const deleteExercice = async (trainingId, exerciceId) => {
    try {
        await databaseConnection();
        const training = await Training.findById(trainingId);
        if (!training) throw new Error('Training not found');
        const exercice = training.exercice.find((exercice) => exercice._id == exerciceId);
        if (!exercice) throw new Error('Exercice not found');
        training.exercice.remove(exerciceId);
        await training.save();
    } catch (err) {
        throw new Error(err.message);
    }
}

export const updateTraining = async (idTraining, newBody) => {
    try {
        await databaseConnection();
        const training = await Training.findById(idTraining);
        if (!training) throw new Error('Training not found');
        training.client = training.client;
        training.description_division = newBody.description_division;
        training.day = newBody.day;
        await training.save();
    } catch (err) {
        throw new Error(err.message);
    }

}

export const updateExercice = async (idTraining, idExercice, newBody) => {
    try {
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
    } catch (err) {
        throw new Error(err.message);
    }

}