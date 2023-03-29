import { User } from "../../../@types/user";

export default class UserRepository {
    public async findOne(userId: number): Promise<User> {
        return Promise.resolve({
                id: userId,
                fullname: 'Elton Macedo',
                age: 33,
                country: 'BR',
                email: 'eltonmacedo@gmail.com'
            }
        );
    }
}