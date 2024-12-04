import mongoose, { mongo } from "mongoose"
import dotenv from 'dotenv';
dotenv.config();

async function connect_db() {
    mongoose.connect(process.env.URI);
    return mongoose.connection;
}

export default connect_db;