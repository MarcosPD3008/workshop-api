import * as yup from 'yup';

export const dictionarySchema = yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string(),
});

export const dictionaryItemSchema = yup.object().shape({
    dictionaryId: yup.number().required(),
    Name: yup.string().required(),
    value: yup.number().required(),
})