import { HouseController } from "@/controller/houseController";
import { HouseService } from "@/db/houseService";

export class HouseHandler {
    getHouses() {
        const ctrl = new HouseController(new HouseService())
    }
}