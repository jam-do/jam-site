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
  font-family: sans-serif;
}

x-article-nav {
  ${columnMixin}
}

h1 {
  display: block;
  ${columnMixin}
}

h2:first-of-type {
  margin-top: 0;
}

footer {
  display: block;
  padding: 20px;
}
`.trim();
