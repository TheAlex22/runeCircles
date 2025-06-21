const template = document.createElement('template')
template.innerHTML = `
<div id="main">
  <div id="spaceDiv" class="spacer"></div>
  <div id="layerDiv" class="circular-text"> ᚨᛚᛚᚨᛁ ᛗᚨᚾᚾᚨ ᚠᚱᛖᛁᚺᚨᛚᛋ ᛃᚨᚺ ᛋᚨᛗᚨᛚᛖᛁᚲᛟ ᛁᚾᛞᚨᛁ ᛃᚨᚺ ᚱᚨᛁᚺᛏᛖᛁᛋ.ᚾᚾᚨ ᚠᚱᛖᛁᚺᚨᛚᛋ </div>
</div>
`
const style = document.createElement('style')
style.textContent = `

  :root {
    --color: #000;
    --backColor: #fff;
  }

  .spacer {
    position: absolute;
    z-index: 100;
    border: var(--color), solid, 5px;
    border-radius: 100%;
  }
  
  .circular-text {
    background-color: var(--backColor);
    color: var(--color);
    border-radius: 100%;
  }

  .circular-text span { 
    position: absolute;
    transform-origin: top left;
  }
  
  .noto-sans-runic-regular {
    font-family: "Noto Sans Runic", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  `

export class Layer extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(style.cloneNode(true))
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {


  }
}

customElements.define('layer-component', Layer)