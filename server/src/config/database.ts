import mongoose from "mongoose";
import { env } from "../constant.js";

export async function database() {
    try {
        const { connection } = await mongoose.connect(env.DATABASE_URL);
        console.log("Database is connected");
        return connection;
    } catch (error) {
        console.error(`Failed to connect with database: ${error}`);
        throw error;
    }
}
