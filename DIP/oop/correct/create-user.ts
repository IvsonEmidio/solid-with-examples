import { IDbConnection } from "../mock/correct/interfaces/connections";

class CreateUser {
    private dbConnection: IDbConnection;

    constructor(dbConnection: IDbConnection) {
        this.dbConnection = dbConnection;
    }

    public async checkConnection() {
        const isConnected = await this.dbConnection.connect();

        // Restante da lógica
    }
}