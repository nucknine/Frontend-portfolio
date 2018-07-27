import sendAjaxJson from './sendAjax';

export default function prepareSend(url, form, data, cb) {
    let statusContainer = form.querySelector('#status');

    statusContainer.innerHTML = 'Sending...';
    sendAjaxJson(url, data, function (data) {
        form.reset();
        statusContainer.innerHTML = data;
        if (cb) {
            cb(data);
        }
    });
}