import joi from "joi";

const addressSchema = joi.object({
    name: joi.string()
        .required(),
    
    address: joi.string()
        .required(),

    city: joi.string()
        .required(),
    
    state: joi.string()
        .required(),
    
    zipcode: joi.number()
        .required()
});

const cardSchema = joi.object({
    name: joi.string()
        .required(),
    
    cardNumber: joi.string()
        .length(16)
        .required(),

    expireDate: joi.string()
        .required(),
    
    cvv: joi.string()
        .length(3)
        .required()
});

export { addressSchema, cardSchema };