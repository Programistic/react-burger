import { Link } from 'react-router-dom';
import { FC } from 'react';
import AdditonalActionsStyles from './additional-actions.module.css';

interface IAdditionalActionsProps {
  text: string,
  link: string,
  linkText: string,
}

const AdditionalActions: FC<IAdditionalActionsProps> = ({ text, link, linkText }) => {
  return (
    <p className={AdditonalActionsStyles.container}>
        {text}
        <Link to={link} className={AdditonalActionsStyles.link}>
          {linkText}
        </Link>
    </p>
  );
};

export default AdditionalActions;
