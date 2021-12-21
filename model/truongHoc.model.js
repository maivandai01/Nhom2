const mongoose = require('mongoose');
const { Schema } = mongoose;


const truongHocSchema = new Schema({
    tenTruong: { 
        type: String,
    },
    diemDanhGia: {
        type: mongoose.SchemaTypes.Decimal128,
    },
    topTruong: {
        type: Number
    },
    soLuongSV: {
        type: Number
    },
    nganh: {
        type: String,
    },
    content: {
        type: String,
    },
    diaChi: {
        type: String,
    },
    soDT: {
        type: mongoose.SchemaTypes.Decimal128,
    },
    desc: {
        type: String,
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
    }
});


module.exports = mongoose.model('TruongHoc', truongHocSchema)