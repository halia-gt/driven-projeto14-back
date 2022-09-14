import db from "../database/db.js";

async function signUp(req, res) {

    try {
        res.send('Ok');
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp
}