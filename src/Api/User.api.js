import Request from './RequestHandler.api';

const SignIn = async (email, password) => {
  try {
    const response = Request.post('/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  SignIn,
}