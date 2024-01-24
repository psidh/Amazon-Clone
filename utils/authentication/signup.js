import axios from 'axios';

const signUpUser = async (router, toast, user) => {
  try {
    const response = await axios.post('/api/signup', user);

    toast.success('SignUp successful');
    router.push('/login');
  } catch (error) {
    console.log(error);
    // toast.error('SignUp Failed');
  }
};

export default signUpUser;
