import mysql from "mysql"

export class SQLConnection {
    private static connection : mysql.Connection;

    public static getConnection() : mysql.Connection {
        return SQLConnection.connection
    }

    constructor() {

        const {
            DATABASE_HOST,
            DATABASE_PORT,
            DATABASE_SCHEMA,
            DATABASE_USER,
            DATABASE_PASSWORD
        } = process.env

        SQLConnection.connection = mysql.createConnection({
            host: DATABASE_HOST ?? "localhost",
            port: +(DATABASE_PORT ?? 3306),
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_SCHEMA            
        })

    }
}