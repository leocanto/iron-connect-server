import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
})

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)