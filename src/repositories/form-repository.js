const CrudRepository = require("./crud-repository");
const Form = require('../model/Form');

class FormRepository extends CrudRepository {

    constructor(){
        super(Form);
    }
}

module.exports = FormRepository;