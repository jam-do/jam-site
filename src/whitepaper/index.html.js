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
 * @param {String} path
 * @returns 
 */
function m2h(path) {
  let txt = fs.readFileSync(path).toString();
  return new Promise((resolve, reject) => {
    marked.parse(txt, (err, html) => {
      if (err) {
        reject();
      }
      resolve(html);
    });
  });
}

let scriptTxt = fs.readFileSync('./src/whitepaper/wp.js').toString();

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-80BMJT58KL"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-80BMJT58KL');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JAM-DO Platform Whitepaper</title>
  <link rel="icon" href="../svg/ico/index.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/wp/index.css">
  <script src="https://esm.run/jam-xxx@1.1.2/tags/widgets/x-article-nav.js" type="module"></script>
</head>
<body>

  <header>
    <img src="../svg/logo/index.svg" height="100" />
    <h1>JAM-DO Platform White Paper</h1>
  </header>

  <details>
    <summary>&nbsp;&nbsp;Short summary</summary>
    <div>${await m2h('./src/md/whitepaper-summary.md')}</div>
  </details>

  <x-article-nav>${await m2h('./src/md/whitepaper.md')}</x-article-nav>

  <footer>&copy; 2024 jam-do.org</footer>

  <dialog-el id="form">
    <toolbar-el> 
      <div>🙂 Let's stay in touch</div>
      <a href="#close" close>✕</a>
    </toolbar-el> 
    
    <form>
      <label>Your Email:</label>
      <input type="email" autocomplete="email" name="email" required />
      <br />
      <label>Message (optional):</label>
      <textarea type="text" name="message" rows="3"></textarea>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </dialog-el>

  <a href="#" up>&uarr;</a>
  <a href="#form" form>@</a>

  <script>${scriptTxt}</script>
</body>
</html>
`.trim();