import styles from './styles/layout.module.scss';
import { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
