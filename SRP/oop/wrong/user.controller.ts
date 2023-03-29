import UserRepository from "../mock/user.repository";

//Exemplo de controller "Deus"
export default class UserController {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getUser(userId: number) {
        if (!userId) {
            throw new Error('Bad Request Error');
        }

        const userData = await this.userRepository.findOne(userId);
        const carData = await this.userRepository.findOne(userId)

        if (!userData || !carData) {
            throw new Error('Not found');
        }

        return {
            user: userData,
            car: carData
        }
    }
}