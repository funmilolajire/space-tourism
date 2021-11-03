import Link from 'next/link';
import styles from './styles/mobilenavbar.module.scss';
import { useRouter } from 'next/dist/client/router';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';

const MobileNavbar = ({ setShowMenu }: { setShowMenu: Dispatch<SetStateAction<boolean>>; }) => {
    const router = useRouter();
    const overlayRef = useRef(null)
    const closeMenu = (e: any) => {
        if (e.target === overlayRef.current) {
            setShowMenu(false)
        }
    }
    useEffect(() => {
        router.events.on('routeChangeStart', () => setShowMenu(false))
        return () => {
            router.events.off('routeChangeStart', () => setShowMenu(false))
        }
    })
    return (
        <div ref={overlayRef} onClick={closeMenu} className={styles.container}>
            <ul>
                <Link href="/" passHref><li className={router.asPath == "/" ? styles.active : ''}><span className={styles.number}>00</span>Home</li></Link>
                <Link href="/destination" passHref><li className={router.asPath == "/destination" ? styles.active : ''}><span className={styles.number}>01</span>Destination</li></Link>
                <Link href="/crew" passHref><li className={router.asPath == "/crew" ? styles.active : ''}><span className={styles.number}>02</span>Crew</li></Link>
                <Link href="/technology" passHref><li className={router.asPath == "/technology" ? styles.active : ''}><span className={styles.number}>03</span>Technology</li></Link>
            </ul>
        </div>
    )
}

export default MobileNavbar
