import { ObjectId } from "mongodb";
import db from "../database/db.js";
import { cartSchema } from "../schemas/cartSchemas.js";

function productValidation(req, res, next) {
    const { productId, name, size, color, price, image } = req.body;
    const validation = cartSchema.validate({ productId, name, size, color, price, image }, { abortEarly: false });

    if (validation.error) {

        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    next();
}

async function productIdValidation(req, res, next) {
    const { productId } = req.params;
    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
        res.sendStatus(400);
        return;
    }

    try {
        const product = await db.collection("carts").findOne({ _id: ObjectId(productId) });

        if (!product) {
            res.status(404).send({ message: "Product not found" });
            return;
        }

        next();

    } catch (error) {
        console.log(error);
        res.sendStatus(502);
    }
}

export { productValidation, productIdValidation };
