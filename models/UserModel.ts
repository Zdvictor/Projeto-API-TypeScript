import knex from "../database/database"
import bcrypt from "bcrypt"
import { IDataUsers } from "../interfaces/IUsers"


class User {


    async findAll() {

        try {

            var resultado = await knex.select(['id','name','email','adm']).from("clientes")

            return resultado

        }catch(err) {

            
            console.log(err)
            return err

        }
        


    }

    async findById(id: number | any)  {

        try {

            var resultado = await knex.select('*').where({id}).from("clientes")

            if(resultado.length > 0) {

                return true


            }else {

                return false

            }
        }catch(err) {

            
            console.log(err)
            return err

        }
        


    }

    async register({name,email,password,adm}: IDataUsers) {

        

        if(name == '' || email == '' || password == '' || adm == '') {

            return {status: false, err: "Faltando Dados"}


        }

        try {

            var hash = await bcrypt.hash(password, 10)

            await knex.insert({name,email,password: hash,adm}).into("clientes")
            return {status: true}


        }catch(err) {

            console.log(err)
            return {status: false, err: "Problema Servidor"}

        }


    }


    async updateUser({id,name,email,password,adm}: IDataUsers) {

        try {

            var existUser = await this.findById(id)

            if(!existUser) {
    
                return {status: false, err: "Ops Esse Usuario Nao Existe No Banco de Dados"}
    
            }

            var hash = await bcrypt.hash(password, 10)
    
            await knex.update({
                name,
                email,
                password: hash,
                adm
            }).where({id})
            .table('clientes')

            return {status: true}
            
        }catch(err) {


            console.log(err)
            
            return {status: false, err: "Problema Servidor"}


        }




    }


    async delete(id: number | any) {

        try{

            var existUser = await this.findById(id)

            if(!existUser) {
    
                return {status: false, err: "Ops Esse Usuario Nao Existe No Banco de Dados"}
    
            }

            await knex.delete().where({id}).table("clientes")

            return {status: true}

        }catch(err) {

            console.log(err)
            return {status:false, err: "Problema Servidor"}

        }



    }


}


export default new User()