import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGO_URI

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection;