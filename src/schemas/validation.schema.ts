import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string(),
    RegExp: yup.string().required().test('valid-regex', 'Invalid regex', (value:any) => {
        try {
          new RegExp(value);
          return true; // If no error is thrown, it's a valid regex
        } catch (e) {
          return false; // If an error is thrown, it's not a valid regex
        }
    })
})