import * as yup from 'yup';
import { userStatus } from '../enums/index.enum';

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]+$/, 'Phone number must be only digits').length(10, 'Phone number must be 10 digits'),
    idNumber: yup.string().required().matches(/^[0-9]+$/, 'ID number must be only digits').length(9, 'ID number must be 9 digits'),
    birthDate: yup.date().required(),
    address: yup.object().shape({
        street: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required().matches(/^[0-9]+$/, 'Zip code must be only digits').length(5, 'Zip code must be 5 digits'),
        number: yup.string().required()
    }),
    status: yup.number().required().oneOf([userStatus.ACTIVE, userStatus.INACTIVE, userStatus.PENDING, userStatus.BLOCKED])
});