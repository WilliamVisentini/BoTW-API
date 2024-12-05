import fetchData from "../utils/fetchData.js";
import Shrine from "../models/shrineModel.js";

class shrineController {
    static async getAllShrines(req, res) {
        await fetchData(Shrine, res);
    }
}

export default shrineController;