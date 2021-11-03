import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/navbar.module.scss';
import { useRouter } from 'next/dist/client/router';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className={styles.container}>
            <div className={styles.image}>
                <Image src="/assets/shared/logo.svg" className={styles.logo} layout='fill' alt="logo" />
            </div>
            <nav>
                <Link href="/" passHref><h5 className={router.asPath == "/" ? styles.active : ''}><span className={styles.number}>00</span>Home</h5></Link>
                <Link href="/destination" passHref><h5 className={router.asPath == "/destination" ? styles.active : ''}><span className={styles.number}>01</span>Destination</h5></Link>
                <Link href="/crew" passHref><h5 className={router.asPath == "/crew" ? styles.active : ''}><span className={styles.number}>02</span>Crew</h5></Link>
                <Link href="/technology" passHref><h5 className={router.asPath == "/technology" ? styles.active : ''}><span className={styles.number}>03</span>Technology</h5></Link>
            </nav>
            <span onClick={() => setShowMenu(prev => !prev)} className={styles.menu_icon}>{showMenu ? <IoMdClose /> : <IoMdMenu />}</span>
            {showMenu && <MobileNavbar setShowMenu={setShowMenu} />}
        </header>
    )
}

export default Navbar
