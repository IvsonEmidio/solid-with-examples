import { IDbConnection } from "./interfaces/connections";

export class MysqlConnection implements IDbConnection {
    public connect(): Promise<boolean> {
        return Promise.resolve(true);
    }
}