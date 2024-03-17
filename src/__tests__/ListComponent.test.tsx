// import React from 'react';
// import { render } from '@testing-library/react';
// import ListComponent from '../components/ListComponent';
//
// // Mock data for testing
// const mockArticles = [
//     {
//         title: 'Article 1',
//         description: 'Description 1',
//         url: 'https://example.com/article1',
//         urlToImage: 'https://example.com/image1.jpg',
//         publishedAt: '2024-03-17T12:34:56Z',
//         source: {
//             id: 'source1',
//             name: 'Source 1',
//         },
//     },
//     {
//         title: 'Article 2',
//         description: 'Description 2',
//         url: 'https://example.com/article2',
//         urlToImage: 'https://example.com/image2.jpg',
//         publishedAt: '2024-03-18T12:34:56Z',
//         source: {
//             id: 'source2',
//             name: 'Source 2',
//         },
//     },
// ];
//
// describe('ListComponent', () => {
//     it('renders articles correctly', () => {
//         const { getByText, getAllByRole } = render(<ListComponent articles={mockArticles} />);
//
//         // Check if titles are rendered
//         const article1Title = getByText('Article 1');
//         const article2Title = getByText('Article 2');
//         expect(article1Title).toBeInTheDocument();
//         expect(article2Title).toBeInTheDocument();
//
//         // Check if descriptions are rendered
//         const article1Description = getByText('Description 1');
//         const article2Description = getByText('Description 2');
//         expect(article1Description).toBeInTheDocument();
//         expect(article2Description).toBeInTheDocument();
//
//         // Check if images are rendered
//         const articleImages = getAllByRole('img');
//         expect(articleImages.length).toBe(2); // Assuming there are 2 articles with images
//
//         // Check if links are rendered
//         const article1Link = getByText('Article 1').closest('a');
//         const article2Link = getByText('Article 2').closest('a');
//         expect(article1Link).toHaveAttribute('href', 'https://example.com/article1');
//         expect(article2Link).toHaveAttribute('href', 'https://example.com/article2');
//     });
// });

import React from 'react';
import { render } from '@testing-library/react';
import ListComponent from '../components/ListComponent';

// Mock data for testing
const mockArticles = [
    {
        title: 'Article 1',
        description: 'Description 1',
        url: 'https://example.com/article1',
        urlToImage: 'https://example.com/image1.jpg',
        publishedAt: '2024-03-17T12:34:56Z',
        source: {
            id: 'source1',
            name: 'Source 1',
        },
    },
    {
        title: 'Article 2',
        description: 'Description 2',
        url: 'https://example.com/article2',
        urlToImage: 'https://example.com/image2.jpg',
        publishedAt: '2024-03-18T12:34:56Z',
        source: {
            id: 'source2',
            name: 'Source 2',
        },
    },
];

describe('ListComponent', () => {
    it('renders articles correctly', () => {
        const { getByText, getAllByRole } = render(<ListComponent articles={mockArticles} />);

        // Check if titles are rendered
        const article1Title = getByText('Article 1');
        const article2Title = getByText('Article 2');
        expect(article1Title).toBeInTheDocument();
        expect(article2Title).toBeInTheDocument();

        // Check if descriptions are rendered
        const article1Description = getByText('Description 1');
        const article2Description = getByText('Description 2');
        expect(article1Description).toBeInTheDocument();
        expect(article2Description).toBeInTheDocument();

        // Check if images are rendered
        const articleImages = getAllByRole('img');
        expect(articleImages.length).toBe(2); // Assuming there are 2 articles with images

        // Check if links are rendered
        const article1Link = getByText('Article 1').closest('a');
        const article2Link = getByText('Article 2').closest('a');
        expect(article1Link).toHaveAttribute('href', 'https://example.com/article1');
        expect(article2Link).toHaveAttribute('href', 'https://example.com/article2');
    });
});

