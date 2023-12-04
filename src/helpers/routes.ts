import { GenerateCode } from './codeGen';
import { validateCedula } from './idCard';  

export const RegisterRoutes = (server: any) => {
    server.get('/cedula', (req: any, res: any, next: any) => {
        res.send(validateCedula(req.query.cedula));
    });

    server.post('/code', (req: any, res: any, next: any) => {
        const { name, lastName} = req.body;

        if(!name || !lastName) {
            res.send(400, { message: 'Name and Last Name are required' });
            return next();
        }

        res.send(GenerateCode(name, lastName));
    })

    return server;
}