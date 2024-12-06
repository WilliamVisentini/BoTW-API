import mongoose from 'mongoose';

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    commonLocations: {
        type: [String],
        required: true,
    },
    properties: {
        type: String,
        required: true,
    },
});

const Weapon = mongoose.model('Weapon', weaponSchema);

export default Weapon;
