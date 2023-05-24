// import { MessageList } from '../MessageList/index.js';

export const SendMessage = () => {

    const element = document.createElement('form');
    element.setAttribute('id','formular');

    element.innerHTML = `
        <div class="form__field">
            <label class="form__label">Your name: <input class="form__input" type="text" id="name" required></label>
        </div>
        <div class="form__field">
            <label class="form__label">Message: <input class="form__input" type="text" id="message" required></label>
        </div>
        <input class="form__button" type="submit" value="Send">
        `;

    const nameElm = element.querySelector('#name');
    const messageElm = element.querySelector('#message');

    const process = (event) => {
        event.preventDefault();
        
        const objectData = {
            name: nameElm.value,
            message: messageElm.value,
        }
        
        fetch('https://czechichat.deno.dev/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectData),
        })
        
        .then(response => response.json())
        .then(data => {
            if (data.status = 'ok') {
                messageElm.value = '';
            }
        });
    }

    element.addEventListener('submit', process);

    return element;
}