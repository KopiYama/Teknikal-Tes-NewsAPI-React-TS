import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Card } from 'antd';

const ListComponent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us', // Ganti dengan kode negara yang Anda inginkan
                        apiKey: 'c0ac45ec9d5140a6801ddcebde17e0e2', // Ganti dengan API key Anda
                    },
                });
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Top Headlines</h1>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={articles}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ListComponent;
