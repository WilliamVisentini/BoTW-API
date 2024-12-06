import mongoose from 'mongoose';

const creatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    commonLocations: {
        type: [String],
        required: true
    },
    recoverableMaterials: {
        type: [String],
        default: []
    }
}, {
    collection: 'animals_and_insects'
});

const Creature = mongoose.model('Creature', creatureSchema);

export default Creature;
