import WrapperStyles from './user-window-wrapper.module.css';

function UserWindowWrapper({children, title, formName, onSubmit}) {

  return(
    <div className={WrapperStyles.container}>
      <h2 className={WrapperStyles.title}>{title}</h2>
      <form className={WrapperStyles.form} name={formName} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default UserWindowWrapper;
