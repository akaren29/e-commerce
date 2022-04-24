const footerTemplate = document.createElement('template');

footerTemplate.innerHTML =`
   <link rel="stylesheet" href="./assets/css/contacto.css">
   <link rel="stylesheet" href="./assets/css/footer.css">

   <section class="contacto">
            <div class="contacto__contenido alineacion">
                <div class="contacto__grupo-logoLinks">   
                   <div class="contacto__logo">
                       <img class="contacto__logo-img" src="./assets/img/Logo.png" alt="logo">
                   </div>
                   <div class="contacto__links">
                       <ul class="contacto__ul">
                           <li class="contacto__li"><a class="contacto__a" href="#">Quienes somos</a></li>
                           <li class="contacto__li"><a class="contacto__a" href="#">Politica de privacidad</a></li>
                           <li class="contacto__li"><a class="contacto__a" href="#">Programa de fidelidad</a></li>
                           <li class="contacto__li"><a class="contacto__a" href="#">Nuestras tiendas</a></li>
                           <li class="contacto__li"><a class="contacto__a" href="#">Quiero ser franquiciado</a></li>
                           <li class="contacto__li"><a class="contacto__a" href="#">Anúncie aquí</a></li>
                       </ul>
                   </div>
                </div>
                <div class="form">
                    <form  id="formulario" action="">
                        <fieldset>
                            <legend class="formulario__legend">Hable con nosotros</legend>
                             <div class="formulario__grupo form-inputs" id="grupo-nombre">
                                <label for="nombre" class="formulario__label">Nombre</label>
                                <div class="formulario__grupo-input">
                                  <input type="text" id="nombre" name="nombre" class="input-padron formulario__input" required>
                                </div>
                              </div>
                              <div class="formulario__grupo form-inputs" id="grupo-mensaje">
                                <label for="mensaje" class="formulario__label"></label>
                                <div class="formulario__grupo-input">
                                    <textarea  rows="4" autocomplete="off" type="text" id="mensaje" name="mensaje" class="input-padron formulario__input" placeholder="Escribe tu mensaje" required></textarea>
                                </div>
                              </div>
        
                              <div class="formulario__grupo-btn-enviar">
                                <input type="submit" value="Enviar mensaje" class="formulario__btn btn-enviar">
                              </div>
                          </fieldset>
                    </form>  
                </div>
            </div>
    </section>
    <footer>
        <p>Desarrollado por Karen Jasso</p>
        <p>2022</p>
    </footer>

`

class FooterSectionComponent extends HTMLElement{
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

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define("footer-component", FooterSectionComponent)