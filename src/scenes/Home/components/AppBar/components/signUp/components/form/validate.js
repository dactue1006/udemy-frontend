const validate = values => {
  const errors = {};

  const requiredFields = ['fullname', 'email', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

export default validate;
