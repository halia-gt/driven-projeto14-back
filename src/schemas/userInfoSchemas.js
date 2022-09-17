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

export { addressSchema };