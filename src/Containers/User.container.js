import { Container, } from 'unstated';

import { UserAPI, } from '../Api';

class User extends Container {
  state = {
    name: null,
  }

  SignIn = async (email, password) => {
    try {
      const response = await UserAPI.SignIn(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default User;