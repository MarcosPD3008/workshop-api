import * as yup from 'yup';
import { userStatus } from '../enums/index.enum';

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]+$/, 'Phone number must be only digits').length(10, 'Phone number must be 10 digits'),
    idNumber: yup.string().required().matches(/^[0-9]+$/, 'ID number must be only digits').length(11, 'ID number must be 11 digits'),
    birthDate: yup.date().required(),
    address: yup.object().shape({
        provincia_id: yup.number().required(),
        minicipio_id: yup.number().required(),
        sector_id: yup.number().required(),
    }),
    status: yup.number().required().oneOf([userStatus.ACTIVE, userStatus.INACTIVE, userStatus.PENDING, userStatus.BLOCKED])
});