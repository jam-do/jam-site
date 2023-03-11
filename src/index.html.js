import { data } from './data/data.js';
import fs from 'fs';
import { marked } from 'marked';

let cardsHtml = '';
let sectionsHtml = '';

for (let path in data) {
  cardsHtml += /*html*/ `
    <a card clr href="#${path}">
      <div>
        <h1>${data[path].title}</h1>
      </div>
    </a>
  `;
  let mdDoc = fs.readFileSync(`./src/md/${path}.md`).toString();
  let mdHtml = await marked(mdDoc);
  sectionsHtml += /*html*/ `
    <section clr id="${path}">
      <a back-btn href="#">&lt; go back</a>
      <h1>${data[path].title}</h1>
      <div>${mdHtml}</div>
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
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <viewport-el>${cardsHtml}</viewport-el>
  <main>${sectionsHtml}</main>
</body>

</html>`;
