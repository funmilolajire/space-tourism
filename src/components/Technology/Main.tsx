import styles from './styles/main.module.scss';
import Heading from '../Shared/Heading';
import Image from 'next/image';
import { useAppContext } from '../../contexts/context';
import { useState, useEffect } from 'react';

const Main = () => {
    const { technology, setTechnology, spaceData } = useAppContext()
    const [technologyData, setTechnologyData] = useState<Technology>()
    useEffect(() => {
        setTechnologyData(undefined)
        const currentTechnologyData = spaceData.technology.find(item => item.name === technology)
        setTechnologyData(currentTechnologyData)
        window.scrollTo(0, 0)
    }, [technology, spaceData])

    return (
        <div className={styles.container}>
            <Heading number="03" text="space launch 101" />
            {technologyData?.name && <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.buttons}>
                        <button onClick={() => setTechnology('Launch vehicle')} className={technology === "Launch vehicle" ? styles.active : ''} type='button'>1</button>
                        <button onClick={() => setTechnology('Spaceport')} className={technology === "Spaceport" ? styles.active : ''} type='button'>2</button>
                        <button onClick={() => setTechnology('Space capsule')} className={technology === "Space capsule" ? styles.active : ''} type='button'>3</button>
                    </div>
                    <section>
                        <h5>the terminology...</h5>
                        <h3>{technologyData.name}</h3>
                        <p>{technologyData.description}</p>
                    </section>
                </div>
                <div className={`${styles.image} ${styles.portrait}`}>
                    <Image src={technologyData.images.portrait} className={styles.technology} layout='fill' alt="technology" />
                </div>
                <div className={`${styles.image} ${styles.landscape}`}>
                    <Image src={technologyData.images.landscape} className={styles.technology} layout='fill' alt="technology" />
                </div>
            </div>}
        </div>
    )
}

export default Main
