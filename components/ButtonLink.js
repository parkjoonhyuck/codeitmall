import Link from 'next/link';
import buttonStyles from './Button.module.css';
import buttonLinkStyles from './ButtonLink.module.css';

export default function ButtonLink({ className = '', ...props }) {
  return <Link className={`${buttonStyles.button} ${buttonLinkStyles.buttonLink} ${className}`} {...props} />;
}
