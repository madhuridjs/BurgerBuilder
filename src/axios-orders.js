import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-burger-builder-11dc3-default-rtdb.firebaseio.com/'
});
export default Instance;