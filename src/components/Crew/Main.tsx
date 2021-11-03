import styles from './styles/main.module.scss';
import Heading from '../Shared/Heading';
import Image from 'next/image';
import { useAppContext } from '../../contexts/context';
import { useState, useEffect } from 'react';

const Main = () => {
    const { crewMember, setCrewMember, spaceData } = useAppContext()
    const [crewMemberData, setCrewMemberData] = useState<CrewMember>()
    useEffect(() => {
        setCrewMemberData(undefined)
        const currentCrewMemberData = spaceData.crew.find(item => item.name === crewMember)
        setCrewMemberData(currentCrewMemberData)
        window.scrollTo(0, 0)
    }, [crewMember, spaceData])
    return (
        <div className={styles.container}>
            <Heading number='02' text='meet your crew' />
            {crewMemberData?.name && <div className={styles.content}>
                <section className={styles.text}>
                    <h4>{crewMemberData.role}</h4>
                    <h3>{crewMemberData.name}</h3>
                    <p>{crewMemberData.bio}</p>
                    <div className={styles.bottom}>
                        <button onClick={() => setCrewMember('Douglas Hurley')} className={crewMember === "Douglas Hurley" ? styles.active : ''} type='button'></button>
                        <button onClick={() => setCrewMember('Mark Shuttleworth')} className={crewMember === "Mark Shuttleworth" ? styles.active : ''} type='button'></button>
                        <button onClick={() => setCrewMember('Victor Glover')} className={crewMember === "Victor Glover" ? styles.active : ''} type='button'></button>
                        <button onClick={() => setCrewMember('Anousheh Ansari')} className={crewMember === "Anousheh Ansari" ? styles.active : ''} type='button'></button>
                    </div>
                </section>
                <div className={styles.image}>
                    <Image src={crewMemberData.images.png} className={styles.crew} layout='fill' alt="crew" />
                </div>
            </div>}
        </div>
    )
}

export default Main
