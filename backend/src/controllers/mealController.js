import express from "express";

import {
    listMeal,
    addNewMeal, addNewFood,
    deleteMeal, deleteFood,
    updateMeal, updateFood
} from "../services/mealService.js";

const router = express.Router();

router.get("/", async (_, res) => {
    try {
        const mealList = await listMeal();
        res.send(mealList);
    } catch {
        res.status().send(err.message);
    }
})

router.post("/", async (req, res) => {
    try {
        const newMeal = await addNewMeal(req.body);
        res.status(201).send(newMeal);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})

router.post("/:mealId/foods", async (req, res) => {
    try {
        const newFood = await addNewFood(req.params.mealId, req.body);
        res.status(201).send(newFood);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})


router.delete("/:mealId", async (req, res) => {
    try {
        await deleteMeal(req.params.mealId);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:mealId/foods/:foodsId", async (req, res) => {
    try {
        await deleteFood(req.params.mealId, req.params.foodsId);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})


router.put("/:mealId", async (req, res) => {
    try {
        await updateMeal(req.params.mealId, req.body);
        res.send()
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.put("/:mealId/foods/:foodsId", async (req, res) => {
    try {
        await updateFood(req.params.mealId, req.params.foodsId, req.body);
        res.send();
    } catch (err) {
        res.status(400).send(err.message);
    }
})

export default router
