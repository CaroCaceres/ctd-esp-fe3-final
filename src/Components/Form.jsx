import React, { useState } from "react";


const Form =  () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    message: "Por favor verifique su información nuevamente",
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
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange}/>
        <button type="submit">Send</button>
      </form>
      {errors.show && <p>{errors.message}</p>}
      {success && <p>Gracias {form.name}, te contactaremos cuando antes vía mail</p>}
    </div>
  );
}

export default Form;