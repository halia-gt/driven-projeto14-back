import { ObjectId } from "mongodb";
import db from "../database/db.js";

async function addToCart(req, res) {
    const { productId, name, size, color, price, image } = req.body;
    const user = res.locals.user;
    const cart = {
        productId,
        name,
        size,
        color,
        price,
        image,
        userId: user._id
    }

    console.log(cart)

    try {
        await db.collection("carts").insertOne(cart);

        res.send({ message: "Product added to cart successfully" });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getUserCart(req, res) {
    const user = res.locals.user;

    try {
        const cart = await db.collection("carts").find({ userId: user._id }).toArray();

        res.send(cart);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    addToCart,
    getUserCart
};