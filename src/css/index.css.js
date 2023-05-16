import { cssMin } from '@jam-do/jam-tools/iso/cssMin.js';
import { data } from '../data/data.js';

/**
 * 
 * @param {TemplateStringsArray} strings 
 * @param  {...any} values 
 */
function css(strings, ...values) {
  let output = '';
  strings.forEach((subStr, idx) => {
    output += subStr;
    output += values[idx];
  });
  return cssMin(output);
}

function generateColors() {
  let output = '';
  let h = 180;
  let getH = () => {
    return [h + 30 + 'deg', h + 210 + 'deg'];
  };
  let length = Object.keys(data).length;
  for (let i = 0; i < length; i++) {
    output += `
      [clr]:nth-child(${i + 1}) {
        --local-tone-1: hsl(${getH()[0]}, 40%, 45%);
        --local-tone-2: hsl(${getH()[1]}, 20%, 90%);
      }`.trim();
    h += 30;
  }
  return output;
}

export default /*css*/ css`
:root {
  --clr-1: #000;
  --clr-2: rgb(178, 214, 252);

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --tile-size: 320px;
}
html, body {
  padding: 0;
  margin: 0;
  background-color: var(--clr-1);
  font-family: 'JetBrains Mono', monospace;
}
h1, h2 {
  font-size: 36px;
}

h3 {
  display: inline-block;
  background-color: var(--local-tone-2);
  color: var(--local-tone-1);
  padding: .1em;
  padding-left: .5em;
  padding-right: .5em;
  margin-top: 30px;
  margin-bottom: 6px;
  text-shadow: none;
}

blockquote {
  display: inline-block;
  padding: 10px;
  border: 1px dashed currentColor;
  margin: 0;
}
blockquote p {
  margin: 0;
}

ul {
  position: relative;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}
ul > li {
  display: block;
  padding: 10px;
  padding-left: 30px;
  border-left: 1px solid currentColor;
  margin-bottom: 0;
}
ul > li::before {
  position: absolute;
  left: 0;
  content: "->";
  color: currentColor;
  text-shadow: 0 0 4px var(--clr-logo-1);
  margin-right: var(--gap-mid);
}

viewport-el {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--tile-size), 1fr));
}
[card] {
  --local-tone-1: #ccc;
  --local-tone-2: #000;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--tile-size);
  padding: var(--gap-max);
  background-color: var(--local-tone-1, #ccc);
  color: var(--local-tone-2, #000);
  transition: .4s;
  cursor: pointer;
}
[card]::before, [card]::after {
  display: block;
  content: '';
  position: absolute;
  pointer-events: none;
  background-color: var(--local-tone-1, #ccc);
}
[card]::before {
  height: 40px;
  width: 20px;
  left: -18px;
}
[card]::after {
  height: 20px;
  width: 40px;
  top: -18px;
}

section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px;
  padding-top: 60px;
  overflow: auto;
  display: block;
  transform: translateX(100%);
  background-color: var(--local-tone-1, #ccc);
  color: var(--local-tone-2, #000);
  text-shadow: 0 0 2px var(--local-tone-1);
  transition: transform ease-in-out .4s;
  background-position: center center;
  background-repeat: no-repeat;
}

section:target {
  transform: none;
}

${generateColors()}

a[card] {
  text-decoration: none;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
}

a[back-btn] {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--local-tone-1);
  color: var(--local-tone-2);
  border-bottom: 2px dotted var(--local-tone-2);
  padding: 20px;
  text-decoration: none;
  transform: translateY(-100%);
  transition: transform .3s;
  transition-delay: .5s;
  z-index: 100000;
}

section:target a[back-btn] {
  transform: none;
}

a {
  color: currentColor;
}

col-css {
  display: block;
  width: 100%;
  max-width: 960px;
}

copy-css {
  display: inline-flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  border: 1px dashed currentColor;
  margin-top: 20px;
}
copy-css > span {
  margin-left: 20px;
}
copy-css > img {
  transform: translateY(-4px);
}

iframe {
  position: relative;
  display: block;
  height: 300px;
  width: 100%;
  border: none;
  border-radius: 4px;
}
iframe::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: attr(text);
  color: #fff;
  z-index: 100000;
  font-size: 60px;
  background-color: #f00;
}
`;
