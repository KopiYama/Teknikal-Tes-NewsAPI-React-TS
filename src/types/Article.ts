export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string; // Tambahkan properti urlToImage
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
}
