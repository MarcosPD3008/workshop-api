import * as yup from 'yup';

export const creditCardSchema = yup.object().shape({
    "cardNumber": yup.string().required().matches(/^[0-9]+$/, 'Card number must be only digits').length(16, 'Card number must be 16 digits'),
    "cardType": yup.number().required().oneOf([1,2]),
    "ammount": yup.number().required().positive().integer(),
    "balance": yup.number().required().positive().integer(),
    "userId": yup.string().required().matches(/^[0-9]+$/, 'User ID must be only digits'),
    "status": yup.number().required().oneOf([1,2])
})