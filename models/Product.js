const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        pid: { type: Number, required: true, unique: true },
        pname: { type: String, required: true, trim: true },
        price: { type: Number, required: false, min: 0 },

    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);