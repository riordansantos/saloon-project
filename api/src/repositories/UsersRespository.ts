import { prisma } from "../database/prisma";
import { Icreate } from "../interfaces/UsersInterface";

class UsersRepository {
  async create({ name, email, password }: Icreate) {
    const result = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return result;
  }
  async findUserByEmail(email: string) {
    const result = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    return result;
  }
}
export { UsersRepository };
