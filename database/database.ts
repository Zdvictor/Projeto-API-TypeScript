import knex from "knex";

const connection = knex({

    client: "mysql2",
    connection: {

        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE


    }


})


export default connection