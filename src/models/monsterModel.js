import mongoose from 'mongoose';

const monsterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    commonLocations: { type: [String]},
    recoverableMaterials: { type: [String]}
});

const Monster = mongoose.model('Monster', monsterSchema);

export default Monster;