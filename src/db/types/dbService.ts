import { House } from "@/types/db/house";

export interface IDBService {
    getHouses(type: string, minPrice: number, maxPrice1: number): Promise<House[]>
    getHouseById(id: number): Promise<House>
}