import { data } from './data/data.js';
import fs from 'fs';
import { marked } from 'marked';
import { applyData } from '@jam-do/jam-tools/iso/applyData.js';
import { htmlMin } from '@jam-do/jam-tools/iso/htmlMin.js';

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
  let year = new Date(Date.now()).toLocaleDateString('en', {
    year: 'numeric',
  });
  mdHtml = applyData(mdHtml, {
    YEAR: year,
  });
  
  sectionsHtml += /*html*/ `
    <section clr id="${path}">
      <a back-btn href="#home">&lt;&lt;- go back</a>
      <col-css>
        <div>${mdHtml}</div>
        <copy-css>
          <img src="./svg/logo/index.svg" width="100">
          <span>${year} &copy; All rights reserved</span>
        </copy-css>
      </col-css>
    </section>
  `;
}

let html = /*html*/ `<!DOCTYPE html>
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
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-80BMJT58KL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-80BMJT58KL');
  </script>
</head>

<body>
  <viewport-el>${cardsHtml}</viewport-el>
  <main>${sectionsHtml}</main>
</body>

</html>`;

export default htmlMin(html);
