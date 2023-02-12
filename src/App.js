import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Works} from './works/Works';
import {RemoveWork} from './removeWork/RemoveWork';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoveWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
