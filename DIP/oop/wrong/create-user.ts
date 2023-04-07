import { PgsqlConnection } from "../mock/wrong/pgsql.connection";

class CreateUser {
    private dbConnection: PgsqlConnection;

    constructor(pgSqlConnection: PgsqlConnection) {
        this.dbConnection = pgSqlConnection;
    }

    public async checkConnection() {
        const isConnected = await this.dbConnection.connect();

        // Restante da logica...
    }
}
