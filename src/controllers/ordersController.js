import db from "../database/db.js";

async function addOrder(req, res) {
    const { cart } = req.body;
    const user = res.locals.user;
    const order = {
        userId: user._id,
        cart,
        payment: user.card,
        shipment: user.address
    }

    try {
        if (!cart || cart.length === 0) {
            res.status(422).send({ message: "You need at least one item on your cart" });
            return;
        }

        await db.collection("orders").insertOne(order);

        res.send({ message: "Order created successfully" });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


export { addOrder };