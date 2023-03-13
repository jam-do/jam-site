import { clrs } from '../logo/index.svg.js';

export default /*svg*/ `
<svg
   width="100"
   height="100"
   viewBox="0 0 100 100"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <g
    transform="translate(0,-50)"
    style="stroke:none;stroke-opacity:1">
    <path
      style="fill:${clrs.bg};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="m 20,130 10,10 H 80 V 75 L 70,65 v 0 H 40 V 90 H 20 Z" />
    <path
      style="fill:${clrs.outline};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="M 40,65 V 90 H 20 v 40 H 69.671407 L 70,65 Z" />
    <path
      style="fill:${clrs.sign};stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
      d="M 50,75 H 60 V 85 H 50 Z m 0,15 h 10 v 30 H 30 v -20 h 10 v 10 h 10 z" />
  </g>
</svg>
`;