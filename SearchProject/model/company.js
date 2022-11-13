const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    primaryText: {
        type: String,
        required: true,
    },
    description: {
        type: String,        
    },
    headline: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    cta: {
        type: String,
        default: ''
    },
    companyUrl: {
        type: String,
        default:'',        
    },
})

companySchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});


exports.Company = mongoose.model('Company', companySchema);