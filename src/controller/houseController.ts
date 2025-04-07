import { House } from "@/types/db/house";
import { IDBService } from "@/db/types/dbService"

export class HouseController {
    dbService: IDBService

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async getHouseByType(type:string, minPrice: number, maxPrice: number): Promise<House[]> {
        const houses = this.dbService.getHouses(type, minPrice, maxPrice)
        return houses
    }
}