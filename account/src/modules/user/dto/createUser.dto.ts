import User from '../user.entity';

class CreateUserDto implements Partial<User> {
  email: string;
  name: string;
  password: string;
}

export default CreateUserDto;
