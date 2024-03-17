import React from 'react';
import { List, Avatar } from 'antd';
import { Article } from '../types/Article'; // Import tipe Article

interface ListComponentProps {
    articles: Article[];
}

const ListComponent: React.FC<ListComponentProps> = ({ articles }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={articles}
            renderItem={(article: Article) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={article.urlToImage} />} //{/* Menggunakan properti urlToImage */}
                        title={<a href={article.url}>{article.title}</a>}
                        description={article.description}
                    />
                </List.Item>
            )}
        />
    );
};

export default ListComponent;
