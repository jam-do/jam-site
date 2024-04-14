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
export function md(path) {
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

export const year = new Date(Date.now()).toLocaleDateString('en', {
  year: 'numeric',
});

export default md;