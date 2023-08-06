import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birth_date: { type: Date, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    meal: [{
        description: { type: String, required: true },
        time: { type: String, required: true },
        foods: [{
            name: { type: String, required: true },
            amount: { type: String, required: true },
            description: { type: String },
        },],
    }],
    training: [{
        description_division: { type: String, required: true },
        day: { type: String, required: true },
        exercice: [{
            name: { type: String, required: true },
            series: { type: Number, required: true },
            repetitions: { type: Number, required: true },
            weight: { type: String },
            description: { type: String },
        }],
    }],
})

export default mongoose.models.Client || mongoose.model('Client', ClientSchema)