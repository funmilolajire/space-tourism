import styles from './styles/main.module.scss';
import Image from 'next/image';
import SelectDestination from './SelectDestination';
import Heading from '../Shared/Heading';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../contexts/context';

const Main = () => {
    const { destination, spaceData } = useAppContext()
    const [destinationData, setDestinationData] = useState<Destination>()
    useEffect(() => {
        setDestinationData(undefined)
        const currentDestinationData = spaceData.destinations.find(item => item.name === destination)
        setDestinationData(currentDestinationData)
        window.scrollTo(0, 0)
    }, [destination, spaceData])
    return (
        <section className={styles.container}>
            <Heading number='01' text='pick your destination' />
            {destinationData?.name &&
                <div className={styles.content}>
                    <div className={styles.image}>
                        <Image src={destinationData.images.png} className={styles.destination} width={445} height={445} alt="destination" />
                    </div>
                    <section className={styles.text}>
                        <SelectDestination />
                        <h2>{destinationData.name}</h2>
                        <p>{destinationData.description}</p>
                        <div className={styles.bottom}>
                            <section className={styles.distance}>
                                <h6>Avg. distance</h6>
                                <span>{destinationData.distance}</span>
                            </section>
                            <section className={styles.time}>
                                <h6>Est. travel time</h6>
                                <span>{destinationData.travel}</span>
                            </section>
                        </div>
                    </section>
                </div>}
        </section>
    )
}

export default Main
