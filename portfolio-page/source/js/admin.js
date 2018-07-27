import fileUpload from './upload';

const formUpload = document.querySelector('#upload');

formUpload.addEventListener('submit', prepareSendFile);

function prepareSendFile(e) {
    e.preventDefault();
    let resultContainer = formUpload.querySelector('.status');
    let formData = new FormData();
    let file = document
        .querySelector('#file-select')
        .files[0];
    let name = document
        .querySelector('#file-desc')
        .value;

    formData.append('photo', file, file.name);
    formData.append('name', name);

    resultContainer.innerHTML = 'Uploading...';
    fileUpload('/admin/upload', formData, function (data) {
        resultContainer.innerHTML = data;
        formUpload.reset();
    });
}