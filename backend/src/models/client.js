import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    //start_date: { type: Date, required: true},
    //birth_date: { type: Date, required: true },
    phone: { type: String, required: true},
})

export default mongoose.models.Client || mongoose.model('Client', ClientSchema)