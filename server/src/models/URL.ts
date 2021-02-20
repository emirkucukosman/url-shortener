import { Schema, model } from 'mongoose'

const URLSchema = new Schema({
    baseURL: {
        type: String,
        required: true,
    },
    shortURL: {
        type: String,
        required: true
    },
    visitCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default model('URL', URLSchema);