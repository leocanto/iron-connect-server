import { db } from "../db.js";

export const getAdmin = (_, res) => {
    const q = "SELECT * FROM administrador";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};