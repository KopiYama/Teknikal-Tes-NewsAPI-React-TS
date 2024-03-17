import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

const DetailComponent = () => {
    const { index } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us', // Ganti dengan kode negara yang Anda inginkan
                        apiKey: 'c0ac45ec9d5140a6801ddcebde17e0e2', // Ganti dengan API key Anda
                    },
                });
                setArticle(response.data.articles[index]);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [index]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Card title={article.title}>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </Card>
        </div>
    );
};


export default DetailComponent;
