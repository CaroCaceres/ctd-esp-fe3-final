import React, {useContext} from 'react';

// Components
import Form from '../Components/Form';

// Context
import {ContextGlobal} from '../Components/utils/global.context';

// Styles
import './Contact.css';

function Contact() {
  const {themeProvider} = useContext(ContextGlobal);

  return (
    <div className={`contact-main ${themeProvider.theme.value}`}>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
