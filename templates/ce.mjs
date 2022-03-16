// Defining a custom element
export default function init_template() {
  customElements.define(
    // Custom element tag name
    'template-element',
    // Anonymous class
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById('template-element');
        let template_content = template.content;
        const shadow_root = this.attachShadow({ mod: 'open' });
        shadow_root.appendChild(template_content.cloneNode(true));
      }
    }
  );
}
