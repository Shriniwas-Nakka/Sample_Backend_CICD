const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
}, {
    timestamps: true
});

let users = mongoose.model('users', userSchema);

class SampleModel {

    create = (req) => {
        return users.create(req).then(result => {
            return result;
        }).catch(error => {
            return error;
        })
    }

}

module.exports = new SampleModel();