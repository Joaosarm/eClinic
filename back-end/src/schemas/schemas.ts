import joi from "joi"

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword:joi.string().required().valid(joi.ref('password')),
    name:joi.string().required(),
    age: joi.number().required()
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const doctorSchema = joi.object({
    name:joi.string().required(),
    picture: joi.string().uri().required(),
    description:joi.string().required(),
    specializationId: joi.number().required()
});

export const scheduleSchema = joi.object({
    doctorId: joi.number().required(),
    day: joi.string().required(),
    hour: joi.string().required()
})