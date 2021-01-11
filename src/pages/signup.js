import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footerSignUpLogin';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [showDisclosure, setShowDisclosure] = useState(false);
  const [linkText, setLinkText] = useState('More');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || email === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    // do firebase stuff
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  const handleShowDisclosure = () => {
    if (showDisclosure === false) {
      setShowDisclosure(true);
      setLinkText('Less');
    } else {
      setShowDisclosure(false);
      setLinkText('More');
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Body>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method='POST'>
              <Form.Input
                type='text'
                placeholder='First name'
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <Form.Input
                type='password'
                placeholder='Password'
                autoComplete='off'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit disabled={isInvalid} type='submit'>
                Sign Up
              </Form.Submit>
              <Form.Text>
                Already a user?{' '}
                <Form.Link to={ROUTES.LOGIN}>Sign In here</Form.Link>
              </Form.Text>
              <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot
                <Form.LinkBtn onClick={() => handleShowDisclosure()}>
                  {linkText}
                </Form.LinkBtn>
              </Form.TextSmall>
              <Form.Disclosure show={showDisclosure}>
                The information collected by Google reCAPTCHA is subject to the
                Google{' '}
                <Form.LinkBtn
                  href='https://policies.google.com/privacy'
                  target='_blank'
                >
                  Privacy Policy
                </Form.LinkBtn>{' '}
                and{' '}
                <Form.LinkBtn
                  href='https://policies.google.com/terms'
                  target='_blank'
                >
                  Terms of Service
                </Form.LinkBtn>{' '}
                , and is used for providing, maintaining and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </Form.Disclosure>
            </Form.Base>
          </Form.Body>
        </Form>
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
