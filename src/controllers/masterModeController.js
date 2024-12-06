import Master from '../models/masterModeModel.js'
import fetchData from "../utils/fetchData.js";

class master_monsterController {
    static async getAllMasterMonsters(req, res) {
        await fetchData(Master, res);
    }
}

export default master_monsterController;  
