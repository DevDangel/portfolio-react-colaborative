 
import { About } from './components/About';
import { renderHeader } from './components/header';
import { createFooter } from './components/footer';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
	// Limpiar el contenido previo
	app.innerHTML = '';

	// Header
	const header = document.createElement('div');
	header.id = 'header';
	app.appendChild(header);
	renderHeader();

	// Main (About)
	const main = document.createElement('main');
	main.innerHTML = About();
	app.appendChild(main);

	// Footer
	app.appendChild(createFooter());
}