import db from "../database/db.js";

async function addAddress(req, res) {
    const { name, address, city, state, zipcode } = req.body;
    const query = res.locals.user._id;
    const newDocument = { $set: {
            address: {
                name,
                address,
                city,
                state,
                zipcode
            }
        }
    };

    try {
        //await db.collection("users").updateOne(query, newDocument);

        res.send({ message: "Address added successfully" });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    addAddress
}