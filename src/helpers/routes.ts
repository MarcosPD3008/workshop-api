import { validateCedula } from './idCard';  

export const RegisterRoutes = (server: any) => {
    server.get('/cedula', (req: any, res: any, next: any) => {
        res.send(validateCedula(req.query.cedula));
    });


    return server;
}