alert("Aji was here")

class Center extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`

    }
}

customElements.define("x-center", Center);

class HighlightBox extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<span style="background-color:yellow; font-weight:bold; padding:5px; border-radius:4px;">
            ${this.innerHTML}
        </span>`;
    }
}

customElements.define("highlight-box", HighlightBox);
