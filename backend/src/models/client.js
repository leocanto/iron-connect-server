import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
    name: { type: String, required: true },
    birth_date: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    meal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        default: []
    }],
    training: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Training",
        default: []
    }],
})

export default mongoose.models.Client || mongoose.model('Client', ClientSchema)