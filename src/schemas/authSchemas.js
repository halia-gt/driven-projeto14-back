import joi from "joi";

const signUpSchema = joi.object({
    username: joi.string()
        .min(3)
        .max(30)
        .required(),

    email: joi.string()
        .email()
        .required(),

    password: joi.string()
        .min(6)
        .required(),

    confirm_password: joi.ref('password')
});

const signInSchema = joi.object({
    email: joi.string()
        .email()
        .required(),

    password: joi.string()
        .required()
});

export {
    signUpSchema,
    signInSchema
};