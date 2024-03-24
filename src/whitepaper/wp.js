console.log('🙂 Hello there!');
let form = document.querySelector('form');
form.onsubmit = (e) => {
  e.preventDefault();
  window.fetch('https://script.google.com/macros/s/AKfycbzV8Hmu8ianLxfBh91f88t15dhZmktWG0iZfhAkH2gWgevrpMh9iww3_k_9rqfaqtcNFg/exec', {
    method: 'POST',
    body: new FormData(form),
  }).then((resp) => {
    if (resp.ok) {
      form.innerHTML = /*html*/ `<div>Thank you! We will contact you shortly.</div>`;
    } else {
      form.innerHTML = /*html*/ `<div>Something went wrong....</div>`;
    }
  });
  form.innerHTML = /*html*/ `<div>Sending...</div>`;
};