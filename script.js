"use strict"
import { NavBar, NavItem } from "./templates/navbar.js"
import { ContentCard, ContentHeading, LoremIpsum } from "./templates/contentcard.js"
// import { ContentCard, ContentHeading, LoremIpsum } from 'https://cdn.jsdelivr.net/gh/bcoving2/bcoving2.github.io/templates/contentcard.js'
//import mymodule from ‘https://cdn.jsdelivr.net/gh/user/repo/file.js’;
const elements = {
    'nav-bar': NavBar,
    'nav-item': NavItem,
    'content-card': ContentCard,
    'content-heading': ContentHeading,
    'lorem-ipsum': LoremIpsum
}
export default function main(event) {
    Object.entries(elements).map(([tag, el]) => customElements.define(tag, el))
}
main()
// window.onload = main