import express from "express";

import {
    listTraining,
    addNewTraining, addNewExercice,
    deleteTraining, deleteExercice,
    updateTraining, updateExercice
} from "../services/trainingService.js";

const router = express.Router();

router.get("/", async (_, res) => {
    try {
        const trainingList = await listTraining();
        res.send(trainingList);
    } catch {
        res.status().send(err.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const newTraining = await addNewTraining(req.body);
        res.send(newTraining);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})

router.post("/:trainingId/exercice", async (req, res) => {
    try {
        const newExercice = await addNewExercice(req.params.trainingId, req.body);
        res.status(201).send(newExercice);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:trainingId", async (req, res) => {
    try {
        await deleteTraining(req.params.trainingId);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:trainingId/exercice/:exerciceId", async (req, res) => {
    try {
        await deleteExercice(req.params.trainingId, req.params.exerciceId);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.put("/:trainingId", async (req, res) => {
    try {
        await updateTraining(req.params.trainingId, req.body);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.put("/:trainingId/exercice/:exerciceId", async (req, res) => {
    try {
        await updateExercice(req.params.trainingId, req.params.exerciceId, req.body);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

export default router
