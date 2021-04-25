class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
        :host {
            padding: 30px;
            color: white;
            background: linear-gradient(to right, #660066 0%, #333300 100%);
            text-align: center;
            font-weight: bold;
            width: 100%;
            position: fixed;
            font-size : 20px;
            bottom: 0px;
         }
        </style>
        <p>The Most Popular Movie Info Collection &#169; 2020</p>
       
        `;
    }
}
customElements.define("footer-bar", FooterBar);