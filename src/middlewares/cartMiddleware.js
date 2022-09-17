import { cartSchema } from "../schemas/cartSchemas.js";

async function productValidation(req, res, next) {
    const { productId, name, size, color, price, image } = req.body;
    const validation = cartSchema.validate({ productId, name, size, color, price, image }, { abortEarly: false });

    if (validation.error) {

        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    next();
}

export { productValidation };
