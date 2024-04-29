import { Link } from 'react-router-dom';
import AdditonalActionsStyles from './additional-actions.module.css';

function AdditionalActions({text, link, linkText}) {
  return(
    <p className={AdditonalActionsStyles.container}>
        {text}
        <Link to={link} className={AdditonalActionsStyles.link}>{linkText}</Link>
    </p>
  );
};

export default AdditionalActions;
