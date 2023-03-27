"use strict"
const style = JSON.parse(`{
    "bar":"margin: 0;padding: 0;display: flex;border-bottom: 1px solid grey;",
    "nav:hover":"background: aliceblue;border: 2px solid cornflowerblue;",
    "nav":"padding: 8px 12px;border: 2px solid white;"
}`)
class NavBar extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = `
            <style>
                div {${style['bar']}}
                span {${style['nav']}font-family: Helvetica;width:8px}
                span:hover {${style['nav:hover']}}
            </style>
            <div><span>=</span><slot></slot></div>
        `
        const burger = this.shadow.querySelector('span')
    
        burger.addEventListener('click', e => {
            e.preventDefault()
            burger.textContent = burger.textContent == '=' ? 'x' : '='
        })
    }
}
class NavItem extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' })
        const link = this.dataset.link
        this.shadow.innerHTML = `
        <style>
            a {${style['nav']}line-height:2em;}
            a:hover {${style['nav:hover']}}
        </style>
        <a href="#${this.dataset.link}">
        ${this.dataset.link}<slot></slot></a>
        `
    }
}
export { NavBar, NavItem }