const userModel = require('../Model/sampleModel');

class SampleService {

    addEmployeeService = (req, res) => {
        return userModel.create(req).then(result => {
            return ({ message: 'User added !', data: result })
        }).catch(error => {
            return ({ message: 'Failed to add user !', error: error })
        })
    }

}

module.exports = new SampleService();