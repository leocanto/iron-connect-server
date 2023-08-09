import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    foods: [{
        name: { type: String, required: true },
        amount: { type: String, required: true },
        description: { type: String },
    },],

})

export default mongoose.models.Meal || mongoose.model('Meal', MealSchema)