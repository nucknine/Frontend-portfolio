/* globals svg4everybody*/
import { initMap } from './google-map.js';
import { mouseParallax, scrollParallax } from './parallax.js';
import { waypoint } from './waypoint-animation.js';
import prepareSend from './prepareSend';

window.onload = () => {

    svg4everybody();

    let mapBox = document.getElementById('map');

    if (mapBox) {
        initMap(mapBox);
    }
    waypoint();
    window.addEventListener('mousemove', mouseParallax);
    window.addEventListener('scroll', scrollParallax);

    // mail sending "contact with me"
    const formMail = document.querySelector('#mail');
    const formLogin = document.querySelector('#login');

    if (formMail) {
        formMail.addEventListener('submit', prepareSendMail);
    }
    if (formLogin) {
        formLogin.addEventListener('submit', prepareSendLogin);
    }

    function prepareSendMail(e) {
        e.preventDefault();
        let data = {
            name: formMail.name.value,
            email: formMail.email.value,
            text: formMail.text.value
        };

        prepareSend('/contact', formMail, data);
    }

    function prepareSendLogin(e) {
        e.preventDefault();
        let data = {
            login: formLogin.login.value,
            password: formLogin.pwd.value
        };

        prepareSend('/authorize', formLogin, data, function(data) {
            if (data === 'Авторизация успешна!') {
                location.href = '/admin';
            }
        });
    }

}