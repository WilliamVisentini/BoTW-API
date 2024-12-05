import fetchData from "../utils/fetchData.js";
import Treasure from "../models/treasuresModel.js";

class treasureController {
    static async getAllTreasures(req, res) {
        await fetchData(Treasure, res);
    }
}

export default treasureController;