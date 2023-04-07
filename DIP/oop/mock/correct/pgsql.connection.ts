import { IDbConnection } from "./interfaces/connections";

export class PgsqlConnection implements IDbConnection {
    public connect(): Promise<boolean> {
        return Promise.resolve(true);
    }
}