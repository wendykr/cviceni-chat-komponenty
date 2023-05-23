import { MessageList } from './MessageList/index.js';
import { SendMessage } from './SendMessage/index.js';

const containerElm = document.querySelector('.container');

const h1Elm = document.createElement('h1');
h1Elm.textContent = 'Czechichat';

containerElm.append(h1Elm, SendMessage(), MessageList());