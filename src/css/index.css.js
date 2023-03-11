export default /*css*/ `
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
  font-family: monospace;
}
h1, h2 {
  font-size: 36px;
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
  transition: transform ease-in-out .4s;
}

section:target {
  transform: none;
}

[clr]:nth-child(1) {
  --local-tone-1: #fb2542;
  --local-tone-2: #f9dee0;
}
[clr]:nth-child(2) {
  --local-tone-1: #F1BF98;
  --local-tone-2: rgb(103, 83, 57);
}
[clr]:nth-child(3) {
  --local-tone-1: #6B818C;
  --local-tone-2: rgb(255, 238, 255);
}
[clr]:nth-child(4) {
  --local-tone-1: #b4b4b4;
  --local-tone-2: #545353;
}
[clr]:nth-child(5) {
  --local-tone-1: #6aa76f;
  --local-tone-2: #e9ffe9;
}
[clr]:nth-child(6) {
  --local-tone-1: #d775c4;
  --local-tone-2: #ffffff;
}
[clr]:nth-child(7) {
  --local-tone-1: #2970cc;
  --local-tone-2: #d8e2ff;
}
[clr]:nth-child(8) {
  --local-tone-1: #ff9747;
  --local-tone-2: rgb(86, 58, 40);
}
[clr]:nth-child(9) {
  --local-tone-1: #6B818C;
  --local-tone-2: rgb(255, 238, 255);
}
[clr]:nth-child(10) {
  --local-tone-1: #b4b4b4;
  --local-tone-2: #363636;
}
[clr]:nth-child(11) {
  --local-tone-1: #5dab92;
  --local-tone-2: #e6ffe8;
}
[clr]:nth-child(12) {
  --local-tone-1: #414141;
  --local-tone-2: #bbbbbb;
}

a[card] {
  text-decoration: none;
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
}

section:target a[back-btn] {
  transform: none;
}`;




