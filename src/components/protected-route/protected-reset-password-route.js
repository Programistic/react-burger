import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

function ProtectedResetPasswordRoute({element}) {

  const { isPasswordResetRequest } = useSelector(store => ({ isPasswordResetRequest: store.flag.isPasswordResetRequest }), shallowEqual);
  const location = useLocation();

  return (
    isPasswordResetRequest ? element : <Navigate to="/login" state={{ from: location}} />
  );
};

export default ProtectedResetPasswordRoute;
