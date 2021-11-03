import styles from './styles/main.module.scss';
import Link from 'next/link';

const Main = () => {
    return (
        <div className={styles.container}>
            <section className={styles.left}>
                <h5>So, you want to travel to</h5>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </section>
            <Link href="/destination" passHref>
                <section className={styles.right}>
                    <h4>Explore</h4>
                </section>
            </Link>
        </div>
    )
}

export default Main
