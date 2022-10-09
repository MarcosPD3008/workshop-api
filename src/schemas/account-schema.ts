import * as yup from 'yup';

export const accountSchema = yup.object().shape({
    "accountNumber": yup.string().required().matches(/^[0-9]+$/, 'Account number must be only digits').length(10, 'Account number must be 10 digits'),
    "accountType": yup.number().required().oneOf([1,2]),
    "balance": yup.number().required().positive().integer(),
    "userId": yup.string().required().matches(/^[0-9]+$/, 'User ID must be only digits'),
    "status": yup.number().required().oneOf([1,2])
})