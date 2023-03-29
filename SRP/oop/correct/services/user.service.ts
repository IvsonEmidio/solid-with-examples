import { User } from "../../../../@types/user";
import UserRepository from "../../mock/user.repository";

export default class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public findUser(userId: number): Promise<User> {
        return this.userRepository.findOne(userId);
    }
}