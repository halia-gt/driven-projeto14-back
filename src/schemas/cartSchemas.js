import joi from "joi";

const cartSchema = joi.object({
    productId: joi.string()
        .required(),

    name: joi.string()
        .required(),

    size: joi.string()
        .invalid("---")
        .required(),

    color: joi.string()
        .invalid("--")
        .required(),

    price: joi.number()
        .required(),

    image: joi.string()
        .required(),
});

export {
    cartSchema
}