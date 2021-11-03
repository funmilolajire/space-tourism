import styles from './styles/selectdestination.module.scss';
import { useAppContext } from '../../contexts/context';

const SelectDestination = () => {
    const { destination, setDestination } = useAppContext()
    return (
        <section className={styles.container}>
            <h5 onClick={() => setDestination('Moon')} className={destination === 'Moon' ? styles.active : ''}>Moon</h5>
            <h5 onClick={() => setDestination('Mars')} className={destination === 'Mars' ? styles.active : ''}>Mars</h5>
            <h5 onClick={() => setDestination('Europa')} className={destination === 'Europa' ? styles.active : ''}>Europa</h5>
            <h5 onClick={() => setDestination('Titan')} className={destination === 'Titan' ? styles.active : ''}>Titan</h5>
        </section>
    )
}

export default SelectDestination
