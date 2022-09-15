import db from "../database/db.js";
import bcrypt from "bcrypt";

async function signUp(req, res) {
    const { username, email, password } = req.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);

        await db.collection("users").insertOne({
            username,
            email,
            password: passwordHash
        });

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp
}