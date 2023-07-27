import { db } from "../utils/db.js";

export const getAdmin = (_, res) => {
    const q = "SELECT * FROM administrador";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const postLogin = (req, res) => {
    const q = "SELECT * FROM administrador WHERE login = ? AND password = ?";
    const { login, password } = req.body;

    db.query(q, [login, password], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}