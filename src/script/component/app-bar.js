class AppBar extends HTMLElement {
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
            :host{ 
                    display: block;
                    padding : 20px;
                    width: 100%;
                    font-family: 'Playfair Display SC', serif;
                    font-size: 30px;
                    background-image: url("https://i.pinimg.com/originals/ac/78/1d/ac781d057a533ec52f2097d6f75b15d4.jpg");
                }
            h1,p{
                padding : 20px;
                text-align: center;
            }
            h1{
                color : red;
            }
            p{
                color: black;
                font-family: 'Bree Serif', serif;
            }
            
        </style> 
        
        <h1>Our Movies</h1>
        <p lang="id" translate="no">Search All Your Favorite Movies</p>
        
        `;
    }
}
customElements.define("app-bar", AppBar);

