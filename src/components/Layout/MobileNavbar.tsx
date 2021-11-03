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
            <nav>
                <Link href="/" passHref><h5 className={router.asPath == "/" ? styles.active : ''}><span className={styles.number}>00</span>Home</h5></Link>
                <Link href="/destination" passHref><h5 className={router.asPath == "/destination" ? styles.active : ''}><span className={styles.number}>01</span>Destination</h5></Link>
                <Link href="/crew" passHref><h5 className={router.asPath == "/crew" ? styles.active : ''}><span className={styles.number}>02</span>Crew</h5></Link>
                <Link href="/technology" passHref><h5 className={router.asPath == "/technology" ? styles.active : ''}><span className={styles.number}>03</span>Technology</h5></Link>
            </nav>
        </div>
    )
}

export default MobileNavbar
