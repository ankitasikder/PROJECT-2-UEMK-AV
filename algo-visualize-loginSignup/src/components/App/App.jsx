import { useEffect } from 'react';
import { useAuth, useResolved } from 'hooks';
import { Login, Signup, Interface } from 'components';
import { Switch, Route, useHistory } from 'react-router-dom';
/*ALL THESE WORKS ARE DONE BY 

ANKITA SIKDER

STUDENT OF BTECH, IN UEMK

CONTACT NO.: 8583939774

EMAIL ID: ankita.sikder14@gmail.com
*/
export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  // If the user is logged in it will prevent the
  // user from seeing the login/signup screens
  // by always redirecting to chat on auth change.
  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/login');
    }
  }, [authResolved, authUser, history]);

  return (
    <div className='app'>
      <Switch>
        <Route path="/" exact component={Interface} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
