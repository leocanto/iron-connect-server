import databaseConnection from '../utils/db.js';
import Meal from '../models/Meal.js';

export const listMeal = async () => {
    try {
        await databaseConnection();
        const meal = await Meal.find().populate('client');
        return meal;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const addNewMeal = async (meal) => {
    try {
        await databaseConnection();
        const newMeal = await Meal.create(meal);
        return newMeal;
    } catch (err) {
        throw new Error(err.message);
    }

}

export const addNewFood = async (mealId, food) => {
    try {
        await databaseConnection();
        const meal = await Meal.findById(mealId);
        if (!meal) throw new Error('Meal not found');
        meal.foods.push(food);
        await meal.save();
    } catch (err) {
        throw new Error(err.message);
    }

}

export const deleteMeal = async (mealId) => {
    try {
        await databaseConnection();
        await Meal.findByIdAndDelete(mealId);
    } catch (err) {
        throw new Error(err.message);
    }

}

export const deleteFood = async (mealId, foodId) => {
    try {
        await databaseConnection();
        const meal = await Meal.findById(mealId);
        if (!meal) throw new Error('Meal not found');
        const food = meal.foods.find((food) => food._id == foodId);
        if (!food) throw new Error('Food not found');
        meal.foods.remove(foodId);
        await meal.save();
    } catch (err) {
        throw new Error(err.message);
    }

}


export const updateMeal = async (mealId, newBody) => {
    try {
        await databaseConnection();
        const meal = await Meal.findById(mealId);
        if (!meal) throw new Error('Meal not found');
        meal.client = meal.client;
        meal.description = newBody.description;
        meal.time = newBody.time;
        await meal.save();
    } catch (err) {
        throw new Error(err.message);
    }

}

export const updateFood = async (mealId, idFood, newBody) => {
    try {
        await databaseConnection();
        const meal = await Meal.findById(mealId);
        if (!meal) throw new Error('Meal not found');
        const foods = meal.foods.find((foods) => foods._id == idFood);
        if (!foods) throw new Error('Food not found');
        foods.name = newBody.name;
        foods.amount = newBody.amount;
        foods.description = newBody.description;
        await meal.save();
    } catch (err) {
        throw new Error(err.message);
    }

}