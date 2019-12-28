import React from 'react';
import { doPost } from '../utils/doPost';

const Contact: React.FC = () => {

  const [loading, setLoading] = React.useState(false);
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [message, setMessage] = React.useState()

  const [nameInputClass, setNameInputClass] = React.useState('')
  const [emailInputClass, setEmailInputClass] = React.useState('')
  const [messageInputClass, setMessageInputClass] = React.useState('')

  const nameInputRef:any = React.useRef(null)
  const emailInputRef:any = React.useRef(null)
  const messageInputRef:any = React.useRef(null)

  const handleSubmit = (e:any) => {

    e.preventDefault();

    let nameIsValid = handleNameChange(name)
    let emailIsValid = handleEmailChange(email)
    let messageIsValid = handleMessageChange(message)

    if (!nameIsValid) {
      return nameInputRef.current.focus()
    }

    if (!emailIsValid) {
      return emailInputRef.current.focus()
    }

    if (!messageIsValid) {
      return messageInputRef.current.focus()
    }

    setLoading(true)
    setHasSubmit(true)

    doPost(
      '/contact', 
      {name, email, message},
      onSuccess, 
      onError  
    )

  }

  const handleNameChange = (name:string) => {
    if (!name || name.length < 1) {
      setNameInputClass('invalid')
      return false;
    }
    setName(name);
    setNameInputClass('valid');
    return true;
  }

  const handleEmailChange = (email:string) => {
    let emailPattern = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}')
    if (!email || email.length < 1 || !emailPattern.test(email)) {
      setEmailInputClass('invalid')
      return false;
    }
    setEmail(email);
    setEmailInputClass('valid')
    return true;
  }

  const handleMessageChange = (message:string) => {
    if (!message || message.length < 1) {
      setMessageInputClass('invalid')
      return false;
    }
    setMessage(message);
    setMessageInputClass('valid')
    return true;
  }

  const clearForm = () => {
    setName(null);
    setEmail(null);
    setMessage(null);
    setNameInputClass('');
    setEmailInputClass('');
    setMessageInputClass('');
  }

  const onSuccess = () => {
    setLoading(false)
    clearForm();
    setSuccess(true)
  }

  const onError = (errors:any) => {
    console.log(errors);
    setLoading(false)
  }

  React.useEffect(() => {
    if (name && name.length > 0 && nameInputRef.current) {
      nameInputRef.current.value = name;
    }

    if (email && email.length > 0 && emailInputRef.current) {
      emailInputRef.current.value = email;
    }

    if (message && message.length > 0 && messageInputRef.current) {
      messageInputRef.current.value = message;
    }
  })

  return (
    <div id={'contact'}>

      <div className={'row'}>
        <h1>CONTACT ME</h1>
      </div>

      { loading ? (
        // LOADING
        <div>
          <div
            id={'loading-view'} 
            className={'row contact-response'}
          >
            <div className={'col col-20'}>
              <h3>Sending your message . . .</h3>
            </div>
            <div className={'col col-20'}>
              <div className={'lds-roller'}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
      ) : (

        <div>
        { hasSubmit ? (
          <div>
            { success ? (
              // SUCCESS
              <div>
                <div
                  id={'success-view'} 
                  className={'row contact-response'}
                >
                  <div className={'col col-20'}>
                    <h3>Success!</h3>
                    <p>I'll get back to you as soon as I can.</p>
                    <p>Thank you for your message.</p>
                  </div>
                </div>
              </div>
            ) : (
              // ERROR
              <div>
                <div
                  id={'error-view'} 
                  className={'row contact-response'}
                >
                  <div className={'col col-20'}>
                    <h3>Oops! It looks like something went wrong.</h3>
                    <div onClick={() => setHasSubmit(false)}  >
                      <p>Click here to try again</p>
                    </div>


                  </div>

                  {/* <div className={'col col-20'}>
                    <h3>You said:</h3>
                    <p>{message || '[ message was empty ]'}</p>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        ) : (
          <form
            id={'contact-form'}
            className={'row'}
            action=""
            onSubmit={handleSubmit}  
            >

            <div className={'col col-10'}>
              <label htmlFor="name">Name: *</label>
              <input 
                onChange={(e) => handleNameChange(e.target.value)}
                className={ nameInputClass }
                ref={nameInputRef}
                type="text" 
                id="name" 
                name="name"
              />
            </div>

            <div className={'col col-10 form-control'}>
              <label htmlFor="email">Email: *</label>
              <input 
                onChange={(e) => handleEmailChange(e.target.value)}
                className={ emailInputClass }
                ref={emailInputRef}
                type="text" 
                id="email" 
                name="email"
              />
            </div>

            <div className={'col col-2 form-control'}>
              <label htmlFor="message">Message: *</label>
              <textarea 
                onChange={(e) => handleMessageChange(e.target.value)}
                className={messageInputClass}
                ref={messageInputRef}
                name="message" 
                id="message"
              ></textarea>
            </div>

            <div className={'col col-2 form-control'}>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        )}
        </div>
      )}

    </div>
  )
} 

export default Contact;