export class PgsqlConnection {
    public connect(): Promise<boolean> {
        return Promise.resolve(true);
    }
}