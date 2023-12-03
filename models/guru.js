const mongoose = require('mongoose');

const GuruSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: false,
    },
    nip: {
        type: String,
        required: [true, 'Silahkan isikan nip anda'],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isikan jenis kelamin anda'],
        unique: false,
    },
    mapel: {
        type: String,
        required: [true, 'Silahkan isikan mapel anda'],
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Silahkan isi alamat email anda'],
    },
    
    nohp: {
        type: String,
        required: [true, 'Silahkan isikan nomer hp anda'],
        unique: false,
    },
});

module.exports = mongoose.model('guru', GuruSchema);