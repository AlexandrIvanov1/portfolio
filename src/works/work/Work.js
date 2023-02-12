import style from './Work.module.css'

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <a href={'/#'}>Посмотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}