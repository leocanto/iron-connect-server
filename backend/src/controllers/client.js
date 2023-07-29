import express from "express";

import { listClient, createClient, deleteClient, updateClient} from "../services/client.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const clientList = await listClient();
    res.send(clientList);
})

router.post("/", async (req, res) => {
    try{
        const client = await createClient(req.body);
        res.status(201).send(client);
    }catch(err){
        res.status(400).send(err);
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
