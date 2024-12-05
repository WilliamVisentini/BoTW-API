import mongoose from 'mongoose';

// Define the Ore Deposit schema
const treasureSchema = new mongoose.Schema({
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
    recoverableMaterials: {
        type: [String],
        required: true,
    },
});

// Create and export the Ore Deposit model
const Treasure = mongoose.model('treasure', treasureSchema);

export default Treasure;
