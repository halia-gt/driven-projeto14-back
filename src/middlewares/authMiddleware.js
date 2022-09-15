import db from "../database/db.js";
import { registerSchema } from "../schemas/authSchemas.js";

async function authValidation(req, res, next) {
    const { username, email, password, confirm_password } = req.body;
    const validation = registerSchema.validate({ username, email, password, confirm_password }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    try {
        const userExist = await db.collection("users").findOne({ email });

        if (userExist) {
            res.status(409).send({ message: "You already have an account associated with this e-mail address"});
            return;
        }

        next();
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    authValidation
};