import React, { useState, useEffect } from 'react';
import ListComponent from '../components/ListComponent';
import { getTopHeadlines } from '../services/newsService';

const HomePage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getTopHeadlines('us');
                setArticles(response.articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Top Headlines</h1>
            <ListComponent articles={articles} />
        </div>
    );
};

export default HomePage;
