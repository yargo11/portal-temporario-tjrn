import styles from './styles.module.scss';

interface CardProps {
    title: string;
    image: string;
    description: string;
    a: string;
}

export function Cards({ title, image, description, a }: CardProps) {
    return (
        <a href={a}>
            <div className={styles.cards}>

                {image  ? (
                    <img src={`/images/icons/${image}.svg`} alt={title} />
                ):(
                 <></>   
                )}
                {/* <img src={`/images/icons/${image}.svg`} alt={title} /> */}

                <p>{title}</p>

                <text>
                    {description}
                </text>

            </div>
        </a>
    )
}