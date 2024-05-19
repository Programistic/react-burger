import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { FC } from 'react';

interface IProtectedResetPasswordRouteProps {
  element: JSX.Element,
}

interface IAppStore {
  flag: any,
}

const ProtectedResetPasswordRoute: FC<IProtectedResetPasswordRouteProps> = ({ element }) => {

  const { isPasswordResetRequest } = useSelector((store: IAppStore) => ({ isPasswordResetRequest: store.flag.isPasswordResetRequest }), shallowEqual);
  const location = useLocation();

  return (
    isPasswordResetRequest ? element : <Navigate to="/login" state={{ from: location}} />
  );
};

export default ProtectedResetPasswordRoute;
