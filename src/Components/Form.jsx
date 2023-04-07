import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    message: 'Por favor verifique su información nuevamente',
    show: false,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length < 5 || !/\S+@\S+\.\S+/.test(form.email)) {
      setErrors({
        ...errors,
        show: true,
      });

      setSuccess(false);

      return;
    }

    setErrors({
      ...errors,
      show: false,
    });
    setSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      {errors.show && <p>{errors.message}</p>}
      {success && <p>Gracias {form.name}, te contactaremos cuando antes vía mail</p>}
    </>
  );
}

export default Form;
