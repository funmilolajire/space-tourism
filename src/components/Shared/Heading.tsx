import styles from './styles/heading.module.scss';

const Heading = ({ number, text }: { number: string, text: string }) => {
    return (
        <h5 className={styles.heading}><span>{number}</span>{text}</h5>
    )
}

export default Heading
