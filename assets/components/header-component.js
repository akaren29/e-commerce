const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link rel="stylesheet" href="./assets/css/header.css">
    <header class="encabezado alineacion">
        <div class="encabezado__logo">
            <a class="contacto__a" href="./index.html"><img  class="encabezado__logo-img" src="./assets/img/Logo.png" alt="logo"></a>
        </div>
        <div class="encabezado__buscar">
            <input type="text" class="encabezado__input" placeholder="¿Qué deseas buscar?">
            <button class="encabezado__btn-buscar">
                <i class="fa-solid fa-magnifying-glass encabezado__buscar-i"></i> 
            </button>
        </div>
        <div class="encabezado__login">
        <button class="encabezado__login-btn"> <a class="contacto__a" href="iniciarSesion.html">Login</a></button>
        </div>
    </header>
`;


class HeaderSectionComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const fontAwesome = document.querySelector('link[href*="fontawesome"]');
        const style = document.querySelector('link[href*="style"]');
        const reset = document.querySelector('link[href*="reset"]')
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        if (style) {
            shadowRoot.appendChild(style.cloneNode());
        }

        if (reset) {
            shadowRoot.appendChild(reset.cloneNode());
        }

        shadowRoot.appendChild(headerTemplate.content);
    }
}

window.customElements.define("header-component", HeaderSectionComponent)