import styles from "./NavBarTab.module.scss"
import Link from "next/link"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NavBarTab({ label, link }) {

    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {

        if (router.pathname === link) setIsActive(true)

    }, [link, router.pathname])

    return <>

        <Link href={link} className={isActive ? styles.active : ''}>
            <span>{label}</span>
        </Link>

    </>;
}
