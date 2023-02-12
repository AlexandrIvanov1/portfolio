import style from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Work} from './work/Work';

export const Works = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                <h2>Работы</h2>
                <div className={style.works}>
                        <Work title={'Social network'} description={'Краткое описание проекта'}/>
                        <Work title={'Todolist'} description={'Краткое описание проекта'}/>
                </div>
            </div>
        </div>
    )
}