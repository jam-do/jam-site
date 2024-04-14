import cards from './cards.html.js';
import md, { year } from '../lib/md.js';
import { htmlMin } from '@jam-do/jam-tools/iso/htmlMin.js';

export default htmlMin( /*html*/ `
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
  <title>R&D Ninjas</title>
  <link rel="icon" href="../svg/ico/index.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/solutions/index.css">
</head>
<body>
  <header>
    <div flex>
      <div we>WE<span fade>B</span></div>
      <div wf>
        <div>R<span fade>ESEARCH</span></div>
        <div and>↓<span fade>↓↓</span></div>
        <div>D<span fade>ESIGN</span></div>
        <div and>↓<span fade>↓</span></div>
        <div>D<span fade>EVELOP</span></div>
        <div and>↓</div>
      </div>
    </div>
  </header>

  <section cards>${cards}</section>

  <section why>${await md('./src/solutions/why.md')}</section>

  <section mail>
    Contact us:&nbsp;<a href="mailto:team@jam-do.net">team@jam-do.net</a>
  </section>

  <footer>&copy; ${year} jam-do.org</footer>
</body>
</html>
`);