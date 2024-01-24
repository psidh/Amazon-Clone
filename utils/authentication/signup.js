import axios from 'axios';

const signUpUser = async (router, toast, user) => {
  try {
    toast.loading('Waiting...', {
      duration: 2000,
    });
    const response = await axios.post('/api/signup', user);
    toast.success('SignUp successful');
    router.push('/login');
  } catch (error) {
    console.log(error);
  }
};

export default signUpUser;
