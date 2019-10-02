const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let policySchema = new Schema({
    policyID: {
        type: String,
        required: [true, 'requerido']
    },
    statecode: {
        type: String,
        required: [true, 'requerido']
    },
    county: {
        type: String,
        required: [true, 'requerido']
    },
    eq_site_limit: {
        type: String,
        required: [true, 'requerido']
    },
    hu_site_limit: {
        type: String,
        required: [true, 'requerido']
    },
    fl_site_limit: {
        type: String,
        required: [true, 'requerido']
    },
    fr_site_limit: {
        type: String,
        required: [true, 'requerido']
    },
    tiv_2011: {
        type: String,
        required: [true, 'requerido']
    },
    tiv_2012: {
        type: String,
        required: [true, 'requerido']
    },
    eq_site_deductible: {
        type: String,
        required: [true, 'requerido']
    },
    hu_site_deductible: {
        type: String,
        required: [true, 'requerido']
    },
    fl_site_deductible: {
        type: String,
        required: [true, 'requerido']
    },
    fr_site_deductible: {
        type: String,
        required: [true, 'requerido']
    },
    point_latitude: {
        type: String,
        required: [true, 'requerido']
    },
    point_longitude: {
        type: String,
        required: [true, 'requerido']
    },
    line: {
        type: String,
        required: [true, 'requerido']
    },
    construction: {
        type: String,
        required: [true, 'requerido']
    },
    point_granularity: {
        type: String,
        required: [true, 'requerido']
    },
});


module.exports = mongoose.model('Policy', policySchema);