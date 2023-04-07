export interface IDbConnection {
    connect(): Promise<boolean>
}