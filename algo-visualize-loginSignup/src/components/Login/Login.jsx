import { fb } from 'service';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { FormField } from 'components/FormField/Formfield';
import { validationSchema, defaultValues } from './formikConfig';

export const Login = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState('');

  const login = ({ email, password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (!res.user) {
          setServerError(
            "We're having trouble logging you in. Please try again.",
          );
        }
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          setServerError('Invalid credentials');
        } else if (err.code === 'auth/user-not-found') {
          setServerError('No account for this email');
        } else {
          setServerError('Something went wrong :(');
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
  
    <div className="auth-form">
      <center><h1 className="heading"><u>ALGORITHMS VISUALIZER</u></h1>
      <h2 className="heading2">Enter Login Credentials...</h2></center>
      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="email" label="Enter Email below..." type="email"/>
            <FormField name="password" label="Enter Password below..." type="password" />

            <div className="auth-link-container">
              Don't have an account?{' '}
              <span
                className="auth-link"
                onClick={() => history.push('signup')}
              >
                Sign Up!
              </span>
            </div>
<center>
            <button type="submit" disabled={!isValid || isSubmitting} >
                Login
            </button>
              </center>
          </Form>
        )}
      </Formik>

      {!!serverError && <div className="error"><center>{serverError}</center></div>}
    </div>
  );
};