import { hash } from "bcrypt";
import { Icreate } from "../interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UsersRespository";

class UsersServices {
  private usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }
  async create({ name, email, password }: Icreate) {
    const findUSer = await this.usersRepository.findUserByEmail(email);
    if (findUSer) {
      throw new Error("User exists");
    }

    const hashPassword = await hash(password, 10);
    const create = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });
    return create;
  }
}

export { UsersServices };
