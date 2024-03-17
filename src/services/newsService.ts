import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export const getTopHeadlines = async (country: string) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country,
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
