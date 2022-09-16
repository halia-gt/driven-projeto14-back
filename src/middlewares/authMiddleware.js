import db from '../database/db.js';

async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        res.sendStatus(401);
        return;
    }
    
    try {
        const session = await db.collection("sessions").findOne({ token });

        if (!session) {
            res.sendStatus(401);
            return;
        }

        const user = await db.collection("users").findOne({ _id:  session.userId });

        if (!user) {
            res.sendStatus(401);
            return;
        }

        res.locals.token = token;
        next();

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { authMiddleware };