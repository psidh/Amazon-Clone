import axios from 'axios';

const loginUser = async (router, toast, user) => {
  try {
    toast.loading('Waiting...', {
      duration: 2000,
    });
    const response = await axios.post('/api/login', user);
    toast.success('Login successful', {
      duration: 2000,
    });
    router.push('/');
  } catch (error) {
    toast.error('Email or Password seems to be incorrect. Please try again');
    console.log(error);
  }
};

export default loginUser;