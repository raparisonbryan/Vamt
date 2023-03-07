import styles from "./NavBarTab.module.scss"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NavBarTab({ label, link }) {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      if (window.location.pathname === link) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [link]);

    return (<>
        <Link to={link}>
            <span>{label}</span>
        </Link>
    </>)
}
