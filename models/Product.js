const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        pid: { type: Number, required: true, unique: true },
        pname: { type: String, required: true, trim: true },
        price: { type: Number, required: true, min: 0 },
        quantity: { type: Number, required: true, min: 0, default: 0 },
        category: { type: String, trim: true, default: 'general' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);