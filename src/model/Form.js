const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    title: String,
    fields: [
      {
        inputType: String,
        label: String,
        placeholder: String,
        readOnly: Boolean,
      },
    ],
  });
  
  const Form = mongoose.model("Form", formSchema);

  module.exports = Form;