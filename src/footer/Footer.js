import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Александр Иванов</h3>
                <div className={style.description}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>Все права защищены</span>
            </div>
        </div>
    )
}