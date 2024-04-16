import { cssMin } from '@jam-do/jam-tools/iso/cssMin.js';

/**
 * 
 * @param {Number} num 
 * @param {String} propName 
 * @returns 
 */
const clrVar = (num, propName) => {
  let variations = '';
  for (let i = 1; i <= num; i++) {
    variations += /*css*/ `
    &:nth-of-type(${i}) {
      ${propName}: hsl(${i * -25}deg, 70%, 30%);
    }`;
  }
  return variations;
};

export default cssMin( /*css*/ `
:root {
  --clr-1: #000;
  --clr-2: #ccc;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: var(--clr-1);
  color: var(--clr-2);
}

body {
  background: linear-gradient(-15deg, rgb(60, 0, 0), #000, rgb(0, 0, 60));
}

* {
  box-sizing: border-box;
}

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  font-size: 6vw;
  font-weight: bold;
  flex-flow: column;

  [flex] {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    
    gap: .6em;

    [we] {
      font-size: 2em;
    }

    [wf] {
      transform: translateY(.3em);
    }

    [fade] {
      opacity: .5;
      transition: opacity .2s;
      &:hover {
        opacity: 1;
      }
    }

    [and] {
      font-size: .6em;
      padding-left: .2em;
    }
  }
}

section {
  margin: 40px;
  padding: 40px;

  &[cards] {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-height: 100vh;
  }

  &[why] {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    h1 {
      position: relative;
      display: block;

      &:before {
        position: absolute;
        content: '☻';
        left: -1.2em;
        opacity: .6;
      }
    }

    h2 {
      position: relative;
      display: block;
      margin-top: 3em;

      &:before {
        position: absolute;
        content: '→';
        left: -1.2em;
        opacity: .4;
      }
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

      li {
        display: block;
        padding: 5px;
        padding-left: 20px;
        border-left: 1px solid rgba(255, 255, 255, .4);
        margin-bottom: 0;
  
        &::before {
          position: absolute;
          left: 0;
          content: "—";
          opacity: .4;
          color: currentColor;
          text-shadow: 0 0 4px var(--clr-logo-1);
          margin-right: var(--gap-mid);
        }
      }
    }
    
  }

  [icons] {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    user-select: none;

    tag-el {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      min-width: 40px;
      padding-left: .4em;
      padding-right: .4em;
      border: 2px solid currentColor;
      border-bottom-width: 3px;
      border-radius: 10px;
      font-size: 18px;
      opacity: .4;
      filter: grayscale(1);
    }
  }

  &[mail] {
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-item: center;
    background-color: rgba(255, 255, 255, .1);
    border-top: 2px solid rgba(255, 255, 255, .2);
    border-radius: 16px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    [fade] {
      opacity: .4;
    }

    a {
      color: currentColor;
      text-decoration: none;
    }
  }
}

card-el {
  position: relative;
  display: block;
  min-width: 340px;
  flex-basis: 0;
  flex-grow: 1;
  background-color: var(--clr-2);
  color: var(--clr-2);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, .4);
  overflow: hidden;

  ${clrVar(8, 'background-color')}

  h2 {
    margin: 0;
    margin-bottom: .4em;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  margin-bottom: 0;
  padding: 40px;
}

@media screen and (max-width: 800px) {
  header {
    min-height: unset;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  section {
    margin: 10px;
    padding: 20px;

    &[why] {
      padding-left: 30px;
    }

    &[mail] {
      border-radius: 0;
      font-size: 22px;
      border: none;
    }
  }
  card-el {
    min-width: 280px;
  }
}
`);