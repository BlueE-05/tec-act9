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
    type: string;
}

interface Size {
    constructionArea: number;
    terrainArea: number;
    bedrooms: number;
    bathrooms: number;
    garage: boolean;
    garden: boolean;
    pool: boolean;
}