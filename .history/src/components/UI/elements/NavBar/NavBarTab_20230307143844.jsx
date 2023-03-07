import styles from "./NavBarTab.module.scss"


export default function NavBarTab({ label, link }) {

    const isActive = window.location.pathname === link

    return (<>
            <a className={isActive ? styles.active : ''}><span>{label}</span></a>
    </>)
}
