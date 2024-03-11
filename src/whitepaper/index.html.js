import fs from 'fs';
import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: (code, lang, callback) => {
    code = hljs.highlight(code, {language: lang}).value;
    callback && callback(undefined, code);
  }
});

/**
 * 
 * @param {String} md 
 * @returns 
 */
function md2html(md) {
  return new Promise((resolve, reject) => {
    marked.parse(md, (err, html) => {
      if (err) {
        reject();
      }
      resolve(html);
    });
  });
}

let mdTxt = fs.readFileSync('./src/md/whitepaper.md').toString();
let mdHtml = await md2html(mdTxt);

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JAM-DO Platform Whitepaper</title>
  <link rel="icon" href="../svg/ico/index.svg">
  <link rel="stylesheet" href="../css/wp/index.css">
  <script src="https://esm.run/jam-xxx@1.1.1/tags/widgets/x-article-nav.js" type="module"></script>
</head>
<body>
  <header>
    <img src="../svg/logo/index.svg" height="100" />
    <h1>Platform Whitepaper</h1>
  </header>
  <x-article-nav>${mdHtml}</x-article-nav>
  <a href="#" up>&uarr;</a>
  <footer>&copy; 2024 jam-do.org</footer>
</body>
</html>
`.trim();