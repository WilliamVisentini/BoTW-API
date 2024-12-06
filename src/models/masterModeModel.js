import mongoose from 'mongoose';

const master_monsterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    commonLocations: { type: [String] },
    recoverableMaterials: { type: [String] },
}, { collection: 'master_mode_monsters' }); // Nome da coleção explicitamente definido

const Master = mongoose.model('Master', master_monsterSchema);

export default Master;
