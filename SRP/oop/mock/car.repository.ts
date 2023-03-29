import { Car } from "../../../@types/car";

export default class CarRepository {
    public async findOne(userId: number): Promise<Car> {
        return Promise.resolve({
            id: userId,
            name: 'Honda Civic 2.0',
            year: 2022,
            depreciation: 'LOW'
        });
    }
}