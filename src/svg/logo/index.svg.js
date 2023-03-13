export const clrs = {
  bg: 'rgba(40, 0, 0, .4)',
  outline: '#f00',
  sign: '#fff',
}

export default /*html*/ `
<svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <path
    style="fill:${clrs.bg};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 20,130 10,10 H 180 V 100 L 160,80 H 80 V 75 L 70,65 v 0 H 40 V 90 H 20 Z"
    id="path2684" />
  <path
    style="fill:${clrs.bg};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"
    d="M 170,80 V 65 h 15 l 10,10 v 15 h -15 z"
    id="path2688" />
  <path
    style="fill:${clrs.outline};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="m 170,65 v 15 h 15 V 65 Z"
    id="path2692" />
  <path
    style="fill:${clrs.outline};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="M 40,65 V 90 H 20 v 40 H 170 V 90 H 160 V 80 H 70 V 65 Z"
    id="path462" />
  <path
    id="path2694"
    style="fill:${clrs.sign};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
    d="M 50,75 H 60 V 85 H 50 Z m 0,15 h 10 v 30 H 30 v -20 h 10 v 10 h 10 z m 20,0 h 30 v 20 h 10 V 90 h 40 v 10 h 10 v 20 h -10 v -20 h -10 v 20 h -10 v -20 h -10 v 20 H 110 100 70 Z m 10,10 v 10 h 10 v -10 z" />
</svg>

`;