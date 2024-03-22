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

export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
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
    
    <form 
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSftqP9Nu60pwyaxBOaS9Q7ASsajNp_LmV-c1aREjwx8UsoEPw/formResponse"
      target="_self"
      method="POST">
      <label>Your Email:</label>
      <input type="email" autocomplete="email" required />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </dialog-el>

  <a href="#" up>&uarr;</a>
  <a href="#form" form>@</a>
</body>
</html>
`.trim();