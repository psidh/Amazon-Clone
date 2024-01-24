import axios from 'axios';

const logoutUser = async (router, toast) => {
  try {
    await axios.get('/api/logout');
    toast.success('Logout successful', {
      duration: 2000,
    });
    router.push('/');
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
};

export default logoutUser;