import {About} from './components/About'
import { createFooter } from './components/footer';
import { renderHeader } from './components/header';

const app = document.querySelector<HTMLDivElement>('#app');

if (app){

    // componente header
    const header = document.createElement('div');
    header.id = 'header';

    // componente about
    const about = document.createElement('about');
    about.innerHTML = About();

    // render y component
    app.replaceChildren(header,about,createFooter());

    renderHeader();

    
}