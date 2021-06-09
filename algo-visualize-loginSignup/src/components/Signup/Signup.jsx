import { fb } from 'service';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormField } from 'components/FormField/Formfield';
import { defaultValues, validationSchema } from './formikConfig';

export const Signup = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState('');

  const signup = ({ email, userName, password }, { setSubmitting }) => {
    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (res?.user?.uid) {
          fetch('/api/createUser', {
            method: 'POST',
            body: JSON.stringify({
              userName,
              userId: res.user.uid,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(() => {
            fb.firestore
              .collection('chatUsers')
              .doc(res.user.uid)
              .set({ userName, avatar: '' });
          });
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setServerError('An account with this email already exists');
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    
    <div className="auth-form">
      <center>
        <h1 className="heading">Welcome Sir. . . </h1>
      <h1 className="heading2">CREATE ACCOUNT</h1></center>
      <Formik
        onSubmit={signup}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="userName" label="Enter Your UserName --->" />
            <FormField name="email" label="Enter Your Email --->" type="email" />
            <FormField name="password" label="Enter Your Password --->" type="password" />
          
            <FormField
              type="password"
              name="verifyPassword"
              label="Verify Password"
            />
  <center>
            <div className="auth-link-container">
              Already have an account?{' '}
              <span className="auth-link" onClick={() => history.push('login')}>
                Log In!
              </span>
              </div>
              </center>
<center>
            <button disabled={isSubmitting || !isValid} type="submit">
                Sign Up
            </button>
              </center>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className="error"><center>{serverError}</center></div>}
      </div>
  );
};