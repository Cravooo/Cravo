import api from './api';

const loginWithEmail = async (email: string, password: string) => {
    const response = await api.post('/auth/login', {email, password});
    return response.data;
}

const registerWithEmail = async (email: string, password: string, firstName: string, lastName: string, username: string) => {
  const response = await api.post('/auth/register', { email, password, firstName, lastName, username });
  return response.data;
};

export default {
  loginWithEmail,
  registerWithEmail,
};