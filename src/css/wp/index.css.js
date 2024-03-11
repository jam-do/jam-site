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
`.trim();
