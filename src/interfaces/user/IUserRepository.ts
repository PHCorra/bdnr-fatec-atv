
type User = {
  name: string,
  email: string,
  address: Address,
  favorites: Favorites,
  purchaes: Purchases,
}

export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>
}