import express from 'express';

import { login, register, listAdmin, deleteAdmin } from '../services/adminService.js';

const router = express.Router();

router.get("/", async (_, res) => {
    try{
        const adminList = await listAdmin();
        res.send(adminList);
    }catch (err){
        res.status(400).send(err.message);
    }
})

router.post("/login", async (req, res) => {
    try{
        const admin = await login(req.body);
        res.status(200).send(admin);
    }catch(err){
        res.status(400).send(err.message);
    }
})

router.post("/register", async (req, res) => {
    try{
        const newAdmin = await register(req.body);
        res.status(201).send(newAdmin);
    }catch(err){
        res.status(400).send(err.message);
    }
})

router.delete("/delete/:id", async (req, res) => {
    try{
        await deleteAdmin(req.params.id);
        res.send();
    }catch(err){
        res.status(400).send(err.message);
    }
})

export default router;