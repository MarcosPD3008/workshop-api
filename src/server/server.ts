import JsonServer from 'json-server';
import { Request, Response, NextFunction } from "express";
import { userSchema } from '../schemas/index.schema';

class Server{
    public start(){
        const server = JsonServer.create();
        const router = JsonServer.router('db.json');
        const middlewares = JsonServer.defaults();
        
        server.use(middlewares);
        server.use(JsonServer.bodyParser)
        server.use(this.validate);
        server.use(this.timestamp);
        server.use(router);

        server.listen(3000, () => {
            console.log('JSON Server is running at port ' + 3000);
        });
    }

    private timestamp = (req:Request, res:Response, next:NextFunction) => {
        if(req.method === 'POST'){
            req.body.createdAt = new Date().getTime();
            req.body.updatedAt = new Date().getTime();
        }
        else if(req.method === 'PUT'){
            req.body.updatedAt = new Date().getTime();
        }

        next();
    }

    private validate = (req:Request, res:Response, next:NextFunction) => {
        if(['POST', 'PUT'].includes(req.method)){
            const path = req.path.split('/')[1];
            const schema = schemas[path];

            if(schema){
                schema.validate(req.body)
                .then(() => next())
                .catch((err: { message: any; }) => {
                    res.status(400).send(err.message);
                    return
                });
            }
            else next();
        }
        else next();
    }
}

const schemas = {
    "users": userSchema,
} as any;

export default Server;