import mongoose from "mongoose";

// Define the schema for a Shrine
const shrineSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true, // Ensures no two shrines have the same ID
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    region: {
        type: String,
        required: true,
        trim: true,
    },
});

// Create the model
const Shrine = mongoose.model("Shrine", shrineSchema);

export default Shrine;
