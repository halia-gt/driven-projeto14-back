import { addressSchema, cardSchema } from "../schemas/userInfoSchemas.js";

async function addressMiddleware(req, res, next) {
    const { name, address, city, state, zipcode } = req.body;
    const validation = addressSchema.validate({
        name,
        address,
        city,
        state,
        zipcode
    }, { abortEarly: false });

    if (validation.error) {

        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    next();
}

async function cardMiddleware(req, res, next) {
    const { name, cardNumber, expireDate, cvv } = req.body;
    const validation = cardSchema.validate({
        name,
        cardNumber,
        expireDate,
        cvv
    }, { abortEarly: false });

    if (validation.error) {

        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    next();
}

export { addressMiddleware, cardMiddleware };