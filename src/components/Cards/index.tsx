import styles from './styles.module.scss';

interface CardProps {
    title: string;
    image?: string;
    description?: string;
    anchor: string;
}

export function Cards({ title, image, description, anchor }: CardProps) {
    return (
        <div className={'col-12 col-md-6 col-lg-4 col-xl-3'}>
            <a href={anchor}>
                <div className={styles.cards}>

                    {image ? (
                        <img src={`/images/icons/${image}.svg`} alt={title} />
                    ) : (
                        <></>
                    )}
                    {/* <img src={`/images/icons/${image}.svg`} alt={title} /> */}

                    <p>{title}</p>

                    <text>
                        {description}
                    </text>

                </div>
            </a>
        </div>
    )
}