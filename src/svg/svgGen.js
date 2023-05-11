function rndNum(min = 60, max = 960) {
  return min + Math.round(Math.random() * (max - min));
}

/**
 * 
 * @param {Number} min 
 * @returns 
 */
function rndCrl(min = 50) {
  return `rgba(${rndNum(min, 255)}, ${rndNum(min, 255)}, ${rndNum(min, 255)}, ${Math.random()})`;
}

let stroke = 'currentColor';
let opacity = 0.4;

function render() {
  let grid = !!(Math.random() > 0.5);
  let nodes = '';
  let points = [];
  let dir = true;
  let x = 500;
  let y = 500;
  for (let i = 1; i < 20; i++) {
    if (grid) {
      dir ? (x = rndNum()) : (y = rndNum());
    } else {
      x = rndNum();
      y = rndNum();
    }
    points.push(`${x},${y}`);
    nodes += /*svg*/ `<circle r="${rndNum(1, 30)}" cx="${x}" cy="${y}" vector-effect="non-scaling-stroke" stroke="${stroke}" stroke-opacity="${opacity}" fill="none" />`;
    dir = !dir;
    grid = !!(Math.random() > 0.5);
  }
  return /*svg*/ `<polyline vector-effect="non-scaling-stroke" points="${points.join(' ')}" stroke="${stroke}" stroke-opacity="${opacity}" fill="none" />` + nodes;
};

export function svgGen() {
  return /*svg*/ `
    <svg
      height="1000"
      width="1000" 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000">
      ${render()}
    </svg>
`};

export function b64Svg() {
  let svg = svgGen();
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export default svgGen();
