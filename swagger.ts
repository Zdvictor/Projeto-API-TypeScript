import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import { Express } from "express";


const swaggerOptions = {

    definition: {

        openapi: "3.0.0",
        info: {

            title: "API CADASTRO DE CLIENTES",
            version: "1.0.0",
            description: "Esta e a Documentação da API'"

        },

        servers: [

            {

                url: "http://localhost:8080"

            }


        ]

    },

    apis: ["./users.yml"]


}


const swaggerDocs = swaggerJSDoc(swaggerOptions)


export const setupSwagger = (app: Express) => {

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

}