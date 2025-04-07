import { House } from "@/types/db/house";

/*const houseList = [
    {
        id: 1,
        description: "",
        location: "",
        price: 10000,
        constructionArea: 100,
        terrainArea: 120,
        bedrooms: 3,
        bathrooms: 3,
        garage: true,
        garden: true,
        pool: false,
        rating: 4,
        imageUrl: "",
        createdAt: Date,
        updatedAt: Date,
        type: "RENT"
    },
    {
        id: 2,
        description: "",
        location: "",
        price: 10000,
        constructionArea: 100,
        terrainArea: 120,
        bedrooms: 3,
        bathrooms: 3,
        garage: true,
        garden: true,
        pool: false,
        rating: 4,
        imageUrl: "",
        createdAt: Date,
        updatedAt: Date,
        type: "RENT"
    },
    {
        id: 3,
        description: "",
        location: "",
        price: 10000,
        constructionArea: 100,
        terrainArea: 120,
        bedrooms: 3,
        bathrooms: 3,
        garage: true,
        garden: true,
        pool: false,
        rating: 4,
        imageUrl: "",
        createdAt: Date,
        updatedAt: Date,
        type: "RENT"
    }
]*/

const houseList: House[] = [
    {
        id: 1,
        description: "",
        location: "",
        price: 10000,
        size: {
            constructionArea: 100,
            terrainArea: 120,
            bedrooms: 3,
            bathrooms: 3,
            garage: true,
            garden: true,
            pool: false,
        },
        rating: 4,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        type: "RENT"
    },
    {
        id: 2,
        description: "",
        location: "",
        price: 10000,
        size: {
            constructionArea: 100,
            terrainArea: 120,
            bedrooms: 3,
            bathrooms: 3,
            garage: true,
            garden: true,
            pool: false,
        },
        rating: 4,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        type: "RENT"
    },
    {
        id: 3,
        description: "",
        location: "",
        price: 10000,
        size: {
            constructionArea: 100,
            terrainArea: 120,
            bedrooms: 3,
            bathrooms: 3,
            garage: true,
            garden: true,
            pool: false,
        },
        rating: 4,
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        type: "RENT"
    }
];


export class HouseService {
    constructor(){}
    
    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return houseList;
    }

    async getHouseById(id: number): Promise<House | undefined> {
        return houseList.find(h => h.id === id);
    }

    async getHouseByType(type: string): Promise<House | undefined> {
        return houseList.find(h => h.type === type);
    }
}