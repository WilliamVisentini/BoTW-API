import Creature from '../models/creatureModel.js'
import fetchData from "../utils/fetchData.js";

class creatureController {
    static async getAllCreatures(req, res) {
        await fetchData(Creature, res);
    }
}

export default creatureController;