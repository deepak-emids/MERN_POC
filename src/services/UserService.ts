import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Response from '../models/Response';
import LoginRequest from '../models/LoginRequest';
import UserRepository from '../repository/UserRepository';
import HttpStatus from 'http-status-codes';
import Message from '../utils/UserMessage.json';

let response = new Response();
class UserService {
  private userRepository;

  constructor(userRepository?: UserRepository) {
    this.userRepository = userRepository
      ? userRepository
      : new UserRepository();
  }

  public loginUser = async (body: LoginRequest): Promise<Response> => {
    let query = { email: body.email };
    let find = await this.userRepository.get(query);

    if (find) {
      let checkPassword = await bcrypt.compare(body.password, find.password);
      if (checkPassword) {
        const token: string = jwt.sign(
          {
            email: find.email,
            id: find.id,
            role_Id: find.role_Id
          },
          process.env.SECRET
        );

        response = {
          data: {
            id: find.id,
            email: find.email,
            role_Id: find.role_Id,
            token: token
          },
          message: Message.SUCCESS,
          status: HttpStatus.OK
        };

        return response;
      } else {
        response = {
          data: {},
          message: Message.UNAUTHORIZED,
          status: HttpStatus.UNAUTHORIZED
        };
        return response;
      }
    } else {
      response = {
        data: {},
        message: Message.NOT_FOUND,
        status: HttpStatus.NOT_FOUND
      };

      return response;
    }
  };
}

export default UserService;
