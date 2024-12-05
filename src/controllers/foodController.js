import fetchData from "../utils/fetchData.js";
import Food from "../models/foodModel.js";

class foodController {
    static async getAllFood(req, res) {
        await fetchData(Food, res);
    }
}

export default foodController;