let columnMixin = `
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

let aBtn = /*css*/ `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: #fff;
  text-decoration: none;
  color: #000;
`;

export default /*css*/ `
* {
  box-sizing: border-box;
}
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
  max-width: 100vw;
  ${columnMixin}

  &::part(article), &::part(nav) {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  &::part(nav) {
    border-right: 1px solid rgba(0, 0, 0, .1);
    padding-right: 2em;
  }

  &::part(nav-item-h2) {
    font-weight: bold;
  }

  &::part(nav-item-h3) {
    font-style: italic;
  }
}

@media screen and (max-width: 800px) {
  x-article-nav {
    display: block;
  }
  x-article-nav::part(nav) {
    display: none;
  }
}

h2:first-of-type {
  margin-top: 0;
}

header {
  display: grid;
  grid-template-columns: min-content auto;
  gap: 20px;
  ${columnMixin}
  padding: 10px;


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
  border-top: 1px solid rgba(0, 0, 0, .1);
  ${columnMixin}
  padding: 20px;
}

a[up] {
  ${aBtn}
  right: 20px;
}
a[form] {
  ${aBtn}
  right: 90px;
}
a[close] {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  background-color: #fff;
  color: #000;
  border-radius: 100%;
  text-decoration: none;
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

details {
  background-color: #00f;
  color: #fff;
  ${columnMixin}
  box-shadow: 4px 4px 0 rgba(0, 0, 100, .2);
  padding: 0;
  user-select: none;

  > div {
    padding: 20px;
  }

  &[open] summary {
    border-bottom: 1px dashed currentColor;

    &::before {
      transform: rotate(-180deg);
    }
  }

  a {
    color: currentColor;
  }
}

summary {
  padding: 20px;
  display: block;
  cursor: pointer;

  &::before {
    display: inline-block;
    content: '↓';
    transition: .2s;
  }
}

dialog-el {
  display: block;
  position: fixed;
  min-height: 200px;
  min-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: #212121;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, .2);
  color: #fff;
  opacity: 0;
  transition: .4s;
  visibility: hidden;

  toolbar-el {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 20px;
    gap: 10px;
  }

  form {
    padding: 20px;

    label {
      display: block;
      margin-top: 10px;
      margin-bottom: 4px;
    }

    input {
      display: block;
      width: 100%;
      height: 32px;
      border: none;
      border-bottom: 2px solid currentColor;
      background-color: rgba(255, 255, 255, .1);
      color: #fff;
      padding-left: 10px;
      padding-right: 10px;
    }

    button {
      height: 32px;
      background-color: #fff;
      color: #000;
      border: none;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

dialog-el:target {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%);
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
