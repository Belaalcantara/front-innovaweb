import axios from "axios";

const API = 'http://localhost:3000/'

const apiC = async () => {
    try {
        const response = await axios.get(API);
        return (response.data);
    } catch (error) {
        throw error;
    }
};

export default apiC;