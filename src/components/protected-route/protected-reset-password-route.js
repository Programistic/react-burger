import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedResetPasswordRouteElement({element}) {

  const { loggedIn, isPasswordRecoverRequest } = useSelector(store => ({
    loggedIn: store.user.loggedIn,
    isPasswordRecoverRequest: store.user.isPasswordRecoverRequest
  }));

  if (loggedIn) {
    return <Navigate to={'/'} />
  } else if (isPasswordRecoverRequest) {
    return element;
  } else {
    return <Navigate to={'/login'} />;
  }
 
    //!loggedIn && isPasswordRecoverRequest ? element : <Navigate to={'/login'} />
};

export default ProtectedResetPasswordRouteElement;
