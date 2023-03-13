import { data } from './data/data.js';
import fs from 'fs';
import { marked } from 'marked';

let cardsHtml = '';
let sectionsHtml = '';

for (let path in data) {
  cardsHtml += /*html*/ `
    <a card clr href="#${path}">
      <div>
        ${data[path].img ? /*html*/ `<img src="${data[path].img}">` : ''}
        ${data[path].title ? /*html*/ `<h1>${data[path].title}</h1>` : ''}
      </div>
    </a>
  `;
  let mdDoc = fs.readFileSync(`./src/md/${path}.md`).toString();
  let mdHtml = await marked(mdDoc);
  sectionsHtml += /*html*/ `
    <section clr id="${path}">
      <a back-btn href="#">&lt; go back</a>
      <col-css>
        <div>${mdHtml}</div>
      </col-css>
    </section>
  `;
}

export default /*html*/ `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jam-do.org</title>
  <meta name="description" content="jam-do - the new age web development platform">
  <meta name="keywords" content="jam-do, jam-x, jam-tools, jam-fi, jam-ai, dwa, ims, daobot, dao, chat-ui, meta web, web development, symbiote.js">
  <link rel="icon" href="./svg/ico/index.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <viewport-el>${cardsHtml}</viewport-el>
  <main>${sectionsHtml}</main>
</body>

</html>`;
