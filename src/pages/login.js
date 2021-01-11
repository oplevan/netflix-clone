import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footerSignUpLogin';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showDisclosure, setShowDisclosure] = useState(false);
  const [linkText, setLinkText] = useState('More');
  const history = useHistory();

  const isInvalid = password === '' || email === '';

  const handleSignIn = (event) => {
    event.preventDefault();

    // firebase work here
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
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
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method='POST'>
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
                Sign In
              </Form.Submit>
              <Form.Text>
                New to Netflix?{' '}
                <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
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
