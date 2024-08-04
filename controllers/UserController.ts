import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { IResultado } from "../interfaces/IUsers";


class UserController {

    async index(req: Request, res: Response) {

        try {

            res.statusCode = 200

            var usuario = await UserModel.findAll()

            res.json(usuario)
            
        }catch(err) {

            res.sendStatus(404)

        }


    }


    async create(req: Request, res: Response) {


        var {name,email,password,adm} = req.body as {name: string, email:string,password: string, adm: string}


        console.log(name)
        console.log(email)
        console.log(password)
        console.log(adm)

        var resultado: IResultado = await UserModel.register({name,email,password,adm})

        if(resultado.status){

            res.sendStatus(200)

        }else {

            
            res.statusCode = 404
            res.json({
                status: resultado.err
            })

        }
       

    }

    async update(req: Request, res: Response) {


        var id: number = parseInt(req.params.id)

        var {name,email,password,adm} = req.body as {name: string, email:string,password: string, adm: string}

        adm = (adm == '') ? '0' : adm;

        var resultado: IResultado = await UserModel.updateUser({id,name,email,password,adm})

        if(resultado.status) {

            res.sendStatus(200)

        }else {

            res.statusCode = 404
            res.json({
                status: resultado.err
            })


        }

    }

    async remove(req: Request, res: Response) {


        var id: number = parseInt(req.params.id)

        var resultado: IResultado = await UserModel.delete(id)

        if(resultado.status) {

            res.sendStatus(200)

        }else {

            res.statusCode = 404
            res.json({
                status: resultado.err
            })
        }


    }


}


export default new UserController()