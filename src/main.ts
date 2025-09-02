
import './styles/style.css'

import { setupCounter } from './counter.ts'
import { About } from './components/About'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = About();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)