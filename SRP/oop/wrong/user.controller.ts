import UserRepository from "../mock/user.repository";
import CarRepository from "../mock/car.repository";

//Exemplo de controller "Deus"
export default class UserController {
    private userRepository: UserRepository;
    private carRepository: CarRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.carRepository = new CarRepository();
    }

    public async getUser(userId: number) {
        if (!userId) {
            throw new Error('Bad Request Error');
        }

        const userData = await this.userRepository.findOne(userId);
        const carData = await this.carRepository.findOne(userId)

        if (!userData || !carData) {
            throw new Error('Not found');
        }

        // Lógica de négocio
        if (userData.age > 18) {
            userData.fullname = `${userData.fullname}, MAIOR DE IDADE`;
        }

        if (carData.year < 2010) {
            carData.depreciation = 'HIGH';
        }

        return {
            user: userData,
            car: carData
        }
    }
}