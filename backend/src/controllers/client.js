import express from "express";

import { listClient, listMeal, addNewClient, addNewMeal, addNewFood, deleteClient, deleteMeal, deleteFood, updateClient } from "../services/client.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const clientList = await listClient();
    res.send(clientList);
})

router.get("/:userId", async (req, res) => {
    const clientList = await listMeal(req.params.userId);
    res.send(clientList);
})

router.post("/", async (req, res) => {
    try {
        const client = await addNewClient(req.body);
        res.status(201).send(client);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post("/:userId/meal", async (req, res) => {
    try {
        const newMeal = await addNewMeal(req.params.userId, req.body);
        res.status(201).send(newMeal);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})

router.post("/:userId/meal/:mealId/foods", async (req, res) => {
    try {
        const newFood = await addNewFood(req.params.userId, req.params.mealId, req.body);
        res.status(201).send(newFood);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:userId", async (req, res) => {
    await deleteClient(req.params.userId);
    res.send();
})

router.delete("/:userId/meal/:mealId", async (req, res) => {
    await deleteMeal(req.params.userId, req.params.mealId);
    res.send();
})

router.delete("/:userId/meal/:mealId/foods/:foodsId", async (req, res) => {
    await deleteFood(req.params.userId, req.params.mealId, req.params.foodsId);
    res.send();
})

router.put("/:userId", async (req, res) => {
    await updateClient(req.params.userId, req.body);
    res.send();
})

export default router
