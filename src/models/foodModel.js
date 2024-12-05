import mongoose from "mongoose";

// Define the schema for the food
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    commonLocations: {
        type: [String], // Array of strings for multiple locations
    },
    heartsRecovered: {
        type: String, // Can remain as a string for "½ heart"
    },
    cookingEffects: {
        type: String,
    },
});

// Create and export the model
const Food = mongoose.model("Food", foodSchema);

export default Food;
