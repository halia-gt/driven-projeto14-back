import db from "../database/db.js";
import { signUpSchema, signInSchema } from "../schemas/authSchemas.js";
import bcrypt from "bcrypt";

async function signUpValidation(req, res, next) {
    const { username, email, password, confirm_password } = req.body;
    const validation = signUpSchema.validate({ username, email, password, confirm_password }, { abortEarly: false });

    if (validation.error) {

        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    try {

        const userExist = await db.collection('users').findOne({ email });

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

async function signInValidation(req, res, next) {
    const { email, password } = req.body;
    const validation = signInSchema.validate({ email, password }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    try {
        const userExist = await db.collection("users").findOne({ email });
        
        if (!userExist) {
            res.status(401).send({ message: "Incorrect e-mail or password" });
            return;
        }
        
        const passwordIsValid = bcrypt.compareSync(password, userExist.password);

        if (!passwordIsValid) {
            res.status(401).send({ message: "Incorrect e-mail or password" });
            return;
        }

        res.locals.user = userExist;
        next();
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUpValidation,
    signInValidation
};