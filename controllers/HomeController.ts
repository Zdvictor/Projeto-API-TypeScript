import {Request, Response} from "express"

class HomeController {


    async index(req: Request, res: Response) {

        res.send("Ola Bem Vindo A Pagina Principal")


    }


}


export default new HomeController()