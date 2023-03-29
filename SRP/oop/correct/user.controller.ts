import UserService from "./services/user.service";
import CarService from "./services/car.service";

export default class UserController {
    private userService: UserService;
    private carService: CarService;

    constructor() {
        this.userService = new UserService();
        this.carService = new CarService();
    }

    public async getUserData(userId: number) {
        if (!userId) {
            throw new Error('Bad Request Error');
        }

        const user = await this.userService.findUser(userId);

        if (!user) {
            throw new Error('Not Found');
        }

        return {
            user
        }
    }

    public async getCarData(userId: number) {
        if (!userId) {
            throw new Error('Bad Request Error');
        }

        const car = await this.carService.findCar(userId);

        if (!car) {
            throw new Error('Not found');
        }

        return {
            car
        }
    }

    public async getUserFullData(userId: number) {
        if (!userId) {
            throw new Error('Bad Request Error');
        }

        const user = await this.userService.findUser(userId);
        const car = await this.carService.findCar(userId);

        if (!user || !car) {
            throw new Error('Not found');
        }

        return {
            user,
            car
        }
    }
}