const sampleService = require('../Service/sampleService');
const response = {}

class SampleController {

    addEmployeeController(req, res) {
        sampleService.addEmployeeService(req.body)
            .then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
    }

}

module.exports = new SampleController();
