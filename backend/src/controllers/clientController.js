import express from "express";

import {
    listClient, addNewClient, deleteClient, updateClient
} from "../services/clientService.js";

const router = express.Router();

router.get("/", async (_, res) => {
    const clientList = await listClient();
    res.send(clientList);
})

router.post("/", async (req, res) => {
    try {
        const client = await addNewClient(req.body);
        res.status(201).send(client);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete("/:userId", async (req, res) => {
    await deleteClient(req.params.userId);
    res.send();
})

router.put("/:userId", async (req, res) => {
    await updateClient(req.params.userId, req.body);
    res.send();
})


export default router