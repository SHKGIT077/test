

"use strict"

const { Schema, model } = require('mongoose');

// Employee Financial Information Collection
const userModel = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    service_id: {
        type: String,
        required: true,
        trim: true
    },
    trading_status: {
        type: String,
        required: true,
        trim: true
    },
    // userid: {
    //     type:Schema.ObjectId,
    //     required: true,
    //     trim: true
    // },

},
    {
        timestamps: true
    },

)
const User_model = model('USER_MODEL', userModel);



module.exports = { User_model:User_model };
