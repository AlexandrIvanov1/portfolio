import style from './RemoveWork.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const RemoveWork = () => {
    return (
        <div className={style.wrapper}>
            <div className={styleContainer.container}>
                <div className={style.description}>
                    <h3>Рассматриваю варианты удаленной работы</h3>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )
}