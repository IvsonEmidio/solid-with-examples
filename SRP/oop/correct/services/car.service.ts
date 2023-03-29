import CarRepository from "../../mock/car.repository";
import { Car } from "../../../../@types/car";

export default class CarService {
    private carRepository: CarRepository;

    constructor() {
        this.carRepository = new CarRepository();

    }
    public findCar(userId: number): Promise<Car> {
        return this.carRepository.findOne(userId);
    }
}