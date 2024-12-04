import Weapon from '../models/weaponModel.js';  // Import the Weapon model
import fetchData from "../utils/fetchData.js";


class WeaponController {
    static async getAllWeapons(req, res) {
        await fetchData(Weapon, res);  // Reuse the fetchData function with the Weapon model
    }
}

export default WeaponController;

/*class weaponController {
    static async getAllWeapons(req, res) {
        try {
            const weaponsList = await Weapon.find({});  // Fetch all weapons
            res.status(200).json(weaponsList);  // Return the list of weapons as JSON
        } catch (error) {
            console.error('Error fetching weapons:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default weaponController; */
