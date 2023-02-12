import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.information}>
                    <span>Привет</span>
                    <h1>Я - Иванов Александр</h1>
                    <p>Frontend разработчик</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>

        </div>
    )
}