let columnMixin = `
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export default /*css*/ `
html, body {
  padding: 0;
  margin: 0;
  background-color: #eee;
  color: #212121;
  font-family: "Roboto", sans-serif;
}

body {
  padding: 20px;
}

x-article-nav {
  grid-template-columns: minmax(min-content, 240px) auto;
  ${columnMixin}

  &::part(article), &::part(nav) {
    padding-top: 2em;
    padding-bottom: 2em;
  }
}

h2:first-of-type {
  margin-top: 0;
}

header {
  display: grid;
  grid-template-columns: min-content auto;
  gap: 20px;
  background: linear-gradient(#fff, rgba(255, 255, 255, .4));
  padding: 10px;
  border-radius: 4px;

  ${columnMixin}


  h1 {
    display: flex;
    margin: 0;
    align-items: center;
    height: 100%;
    color: #404040;
    transform: translateY(4px);
  }
}

footer {
  display: block;
  background: linear-gradient(rgba(255, 255, 255, .4), #fff);
  padding: 20px;
  border-radius: 4px;

  ${columnMixin}
}

a[up] {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: #fff;
  text-decoration: none;
  color: #000;
}

ul {
  position: relative;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }
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
  content: "—";
  color: currentColor;
  text-shadow: 0 0 4px var(--clr-logo-1);
  margin-right: var(--gap-mid);
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

code {
  --clr-2: #262626;
  color: var(--clr-2, #fe0);
  border-radius: var(--r1, 6px);
}

code:not([class]) {
  background-color: rgba(160, 160, 160, .3);
  color: currentColor;
  display: inline-block;
  padding: .05em;
  padding-left: .5em;
  padding-right: .5em;
  margin-left: .2em;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
}

code[class] {
  display: block;
  padding: var(--gap-max, 20px);
  background-color: var(--clr-2, #000);
  color: #fff;
  overflow: auto;
}

code .hljs-string {
  color: rgb(251, 182, 79);
}
code .hljs-comment {
  color: rgb(149, 149, 149);
  font-style: italic;
}
code .hljs-attr, code .hljs-attribute {
  color: rgb(138, 218, 172);
}
code .hljs-function {
  color: rgb(239, 235, 149);
}
code .hljs-variable {
  color: rgb(121, 183, 255);
}
code .hljs-title {
  color: rgb(180, 243, 255);
}
code .hljs-property, code .hljs-selector-class {
  color: rgb(238, 131, 252);
}
code .hljs-keyword {
  color: rgb(254, 165, 176);
}
code .hljs-tag {
  color: rgb(254, 165, 176);
}
code .hljs-name {
  color: rgb(165, 245, 254);
}
code .hljs-number {
  color: rgb(180, 243, 255);
}
`.trim();
