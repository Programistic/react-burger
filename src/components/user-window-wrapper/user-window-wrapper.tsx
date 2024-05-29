import WrapperStyles from './user-window-wrapper.module.css';
import { FC } from 'react';
import { FormEvent } from 'react';

interface IUserWindowWrapperProps {
  children: React.ReactNode,
  title: string,
  formName: string,
  onSubmit: (event: FormEvent) => void,
}

const UserWindowWrapper: FC<IUserWindowWrapperProps> = ({ children, title, formName, onSubmit }) => {
  return (
    <div className={WrapperStyles.container}>
      <h2 className={WrapperStyles.title}>{title}</h2>
      <form className={WrapperStyles.form} name={formName} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default UserWindowWrapper;
