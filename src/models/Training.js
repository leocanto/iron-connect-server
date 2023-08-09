import mongoose from "mongoose";

const TrainingSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    description_division: { type: String, required: true },
    day: { type: String, required: true },
    exercice: [{
        name: { type: String, required: true },
        series: { type: Number, required: true },
        repetitions: { type: Number, required: true },
        weight: { type: String },
        description: { type: String },
    }],

})

export default mongoose.models.Training || mongoose.model('Training', TrainingSchema)