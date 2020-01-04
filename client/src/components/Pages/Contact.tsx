import React from 'react';

// form
import ContactForm from './ContactForm';

const Contact: React.FC = () => {

  return (
    <div id={'contact'}>

      <div id={'header'} className={'col col-8'}>
        <h1>CONTACT ME</h1>
      </div>

      <div id={'content'}>
        
        <div id={'form'}>
          <ContactForm />
        </div>

        <div id={'details'}>
        <p>Drop me a line! Unless you're my ex.</p><br/>
          <p>mjboylson@gmail.com <br/> +1 513 502 4549</p>
          <p>Other acceptable forms of contact:</p>
          <ul>
            <li>Telegram</li>
            <li>Sky Writing</li>
            <li>Hidden Messages in Pop Songs</li>
          </ul>
        </div>

      </div>
    </div>
  )
} 

export default Contact;