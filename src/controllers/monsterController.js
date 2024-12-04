import Monster from "../models/monsterModel.js";
import fetchData from "../utils/fetchData.js";

class monsterController {
    static async getAllMonsters(req, res) {
        await fetchData(Monster, res);  // Reuse the fetchData function with the Monster model
    }
}

export default monsterController;  // Use default export
