"use strict"
import { NavBar, NavItem } from "./templates/navbar.js"
import { ContentCard, ContentHeading, LoremIpsum } from "./templates/contentcard.js"
const elements = {
    'nav-bar': NavBar,
    'nav-item': NavItem,
    'content-card': ContentCard,
    'content-heading': ContentHeading,
    'lorem-ipsum': LoremIpsum
}

export default function main(event) {
    // const templates = [...document.getElementsByTagName('template')]
    // const imports = [...document.getElementsByTagName('link')]
    //     .filter(link => link.type == 'text/html')
    //     .map(link => link.import)
    // templates.map(template => 
    //     customElements.define(template.id, class Template extends HTMLElement {
    //         connectedCallback() {
    //             const shadow = this.attachShadow({mode: 'open'})
    //             shadow.innerHTML = template.innerHTML
    //         }
    //     })
    // )
    // Object.entries(elements).map(([tag, class]) => customElements.define(tag, class))
    // for(const [tag, class] of entries) {
    //     customElements.define(tag, class)
    // }
    // const entries = Object.entries(elements)
    // console.log(entries)
    customElements.define('nav-bar', NavBar)
    customElements.define('nav-item', NavItem)
    customElements.define('content-card', ContentCard)
    customElements.define('content-heading', ContentHeading)
    customElements.define('lorem-ipsum', LoremIpsum)
}
// main()
window.onload = main