import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.contacts}>
                    <h2>Контакты</h2>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}