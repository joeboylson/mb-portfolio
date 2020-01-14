import React from 'react';

// utils
import { doPost } from '../utils/doPost';

// svg
import { ReactComponent as Alert } from '../../svg/alert.svg';


const ContactForm: React.FC = () => {

  const [loading, setLoading] = React.useState(false);
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  const [mol, setMol] = React.useState();

  const [emailInputClass, setEmailInputClass] = React.useState('')
  const [subjectInputClass, setSubjectInputClass] = React.useState('')
  const [messageInputClass, setMessageInputClass] = React.useState('')
  const [molInputClass, setMolInputClass] = React.useState('')

  const emailInputRef: any = React.useRef(null);
  const subjectInputRef: any = React.useRef(null);
  const messageInputRef: any = React.useRef(null);
  const molInputRef: any = React.useRef(null);

  const handleSubmit = (e: any) => {

    e.preventDefault();

    let subjectIsValid = handleSubjectChange(subject)
    let emailIsValid = handleEmailChange(email)
    let messageIsValid = handleMessageChange(message)
    let molIsValid = handleMolChange(mol)

    if (!subjectIsValid) {
      return subjectInputRef.current.focus()
    }

    if (!emailIsValid) {
      return emailInputRef.current.focus()
    }

    if (!messageIsValid) {
      return messageInputRef.current.focus()
    }

    if (!molIsValid) {
      return molInputRef.current.focus()
    }

    setLoading(true)
    setHasSubmit(true)

    doPost(
      '/contact',
      { email, subject, message, mol },
      onSuccess,
      onError
    )
  }

  const handleSubjectChange = (subject: string) => {
    setSubject(subject);
    if (!subject || subject.length < 1) {
      setSubjectInputClass('invalid')
      return false;
    }
    setSubjectInputClass('valid');
    return true;
  }

  const handleEmailChange = (email: string) => {
    setEmail(email);
    let emailPattern = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}')
    if (!email || email.length < 1 || !emailPattern.test(email)) {
      setEmailInputClass('invalid')
      return false;
    }
    setEmailInputClass('valid')
    return true;
  }

  const handleMessageChange = (message: string) => {
    setMessage(message);
    if (!message || message.length < 1) {
      setMessageInputClass('invalid')
      return false;
    }
    setMessageInputClass('valid')
    return true;
  }

  const handleMolChange = (mol:string) => {
    setMol(mol);
    if (!mol || mol.length < 1) {
      setMessageInputClass('invalid')
      return false;
    }
    setMolInputClass('valid')
    return true;
  }

  const clearForm = () => {
    setSubject(null);
    setEmail(null);
    setMessage(null);
    setMol(null);
    setSubjectInputClass('');
    setEmailInputClass('');
    setMessageInputClass('');
    setMolInputClass('');
  }

  const onSuccess = () => {
    setLoading(false)
    clearForm();
    setSuccess(true)
  }

  const onError = (errors: any) => {
    console.log(errors);
    setLoading(false)
  }

  const onOK = () => {
    setLoading(false);
    setHasSubmit(false);
    setSuccess(false);
    clearForm();
  }

  React.useEffect(() => {

    if (email && email.length > 0 && emailInputRef.current) {
      emailInputRef.current.value = email;
    }

    if (subject && subject.length > 0 && subjectInputRef.current) {
      subjectInputRef.current.value = subject;
    }

    if (message && message.length > 0 && messageInputRef.current) {
      messageInputRef.current.value = message;
    }

    if (mol && mol.length > 0 && molInputRef.current) {
      molInputRef.current.value = mol;
    }
  }, [email, subject, message, mol])

  return (

    <div>

      { loading ? (
        <div className={'status-block'}>
          <div>
            <h2>Sending your message . . .</h2>
          </div>
          <div>
            <p>This will take just a moment.</p>
          </div>
        </div>
      ) : (
          <div>

            { hasSubmit ? (

              <div>
                { success ? (
                  <div className={'status-block'}>
                    <div>
                      <h2>Got it!</h2>
                    </div>
                    <div>
                      <p>Your message was sent successfully.</p>
                      <p>Hold tight and I'll get back to you ASAP.</p>
                    </div>
                    <div>
                      <button
                        onClick={() => onOK()}
                      >OK</button>
                    </div>
                  </div>
                ) : (
                  <div className={'status-block'}>
                    <div>
                      <h2>Oops . . .</h2>
                    </div>
                    <div>
                      <p>There was an error when we tried to send your message.</p>
                      <p>Check your internet connection and try again, or send me a message directly.</p>
                    </div>
                    <div>
                      <p>We kept your message safe!</p>
                      <p>Copy it to your clipboard for safe keeping.</p>
                      <p className='saved-message'>{ message || '[ no message ]'}</p>
                      { mol &&
                        <p className='saved-message'>{ mol || ''}</p>
                      }
                    </div>
                  </div>
                  )}
              </div>

            ) : (
                <div id={'contact-form'}>

                  {/* EMAIL */}
                  <h3>Email</h3>
                  <div className={`input-wrapper ${emailInputClass}`}>
                    <input
                      onChange={(e) => handleEmailChange(e.target.value)}
                      ref={emailInputRef}
                      type="email"
                    />
                  </div>

                  {/* SUBJECT */}
                  <h3>Subject</h3>
                  <div className={`input-wrapper ${subjectInputClass}`}>
                    <input
                      onChange={(e) => handleSubjectChange(e.target.value)}
                      ref={subjectInputRef}
                      type="text"
                    />
                  </div>

                  {/* MESSAGE */}
                  <h3>Message</h3>
                  <div className={`input-wrapper ${messageInputClass}`}>
                    <textarea
                      ref={messageInputRef}
                      onChange={(e) => handleMessageChange(e.target.value)}
                    ></textarea>
                  </div>


                  {/* MEANING OF LIFE */}
                  <h3>What is the meaning of life? (optional)</h3>
                  <div className={'input-wrapper'}>
                    <textarea
                      className={molInputClass}
                      ref={molInputRef}
                      onChange={(e) => handleMolChange(e.target.value)}
                    ></textarea>
                  </div>
                  <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
              )}



          </div>
        )}

    </div>
  )
}

export default ContactForm;