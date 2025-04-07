export interface House {
    id: number;
    description: string;
    imageUrl: string;
    location: string;
    price: number;
    size: Size;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Size {
    constructionSize: number;
    lotSize: number;
    bedrooms: number;
    bathrooms: number;
    garage: boolean;
    garden: boolean;
    pool: boolean;
}