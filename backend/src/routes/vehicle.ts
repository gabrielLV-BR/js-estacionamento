import { Router } from "express";
import { SQLConnection } from "../db/connection";

const router = Router()

new SQLConnection()

const connection = SQLConnection.getConnection()

router.get("/", (req, res) => {
    const results = connection.query("SELECT * FROM veiculos;", (err, result) => {
        res.send(JSON.stringify(result))
    });
})

export default router;